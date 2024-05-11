import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Post } from "../../models/post.model";
import { Like } from "../../models/like.model";
import { Comment } from "../../models/comment.model";
import { Repositories } from "../../dataAccess/repositories";
import { PostService } from "../post.service";
import { GetPostResDto } from "../../dtos/post.dto";
import { GetCommentResDto } from "../../dtos/comment.dto";
import { GetLikeResDto } from "../../dtos/like.dto";

@injectable()
export class PostServiceImpl implements PostService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createPost(req: any): Promise<any> {
    const data: Post = req.body;
    data.author = req.user.userId;
    data.created_by = req.user.userId;
    data.created_at = new Date();
    return await this.repo.posts.create(data);
  }

  async getPosts(req: any): Promise<any> {
    const res: any = await this.repo.posts.get(req);
  
    const postPromises: Promise<any>[] = res.data.map(
      async (post: any) => {
        const resComments: any = await this.repo.comments.getAllByPostId(post._id);
        
        const comments: any = resComments.data.map(
          (comment: any) =>
            new GetCommentResDto(
              comment._id,
              comment.post,
              comment.author,
              comment.content,
              comment.created_at,
              comment.is_active,
              `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/").replace("posts","comments")}/${comment._id}`
            )
        );
  
        const resLikes: any = await this.repo.likes.getAllByPostId(post._id);
        const likes: any = resLikes.data.map(
          (like: any) =>
            new GetLikeResDto(
              like._id,
              like.user,
              like.post,
              like.created_at,
              like.is_active
            )
        );

        return new GetPostResDto(
          post._id,
          post.author,
          post.title,
          post.content,
          post.images,
          post.created_at,
          post.is_active,
          `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}/${post._id}`,
          { comments, total:resComments.totalCount },
          { likes, total:resLikes.totalCount }
        );
    });
  
    const posts = await Promise.all(postPromises);
    return { posts, ...res.page_info };
  }

  async getPost(req: any): Promise<any> {
    const res: any = await this.repo.posts.getById(req.params.id);
    const resComments: any = await this.repo.comments.getByPostId(req);
    const comments: Comment[] = resComments.data.map(
      (comment: any) =>
        new GetCommentResDto(
          comment._id,
          comment.post,
          comment.author,
          comment.content,
          comment.created_at,
          comment.is_active,
          `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}/${comment._id}`
        )
    );

    const resLikes: any = await this.repo.likes.getByPostId(req);
    const likes: any = resLikes.data.map(
      (like: any) =>
        new GetLikeResDto(
          like._id,
          like.user,
          like.post,
          like.created_at,
          like.is_active
        )
    );

    const post: GetPostResDto = new GetPostResDto(
      res._id,
      res.author,
      res.title,
      res.content,
      res.images,
      res.created_at,
      res.is_active,
      `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}`,
      { comments, ...resComments.page_info },
      { likes, ...resLikes.page_info }
    );
    return post;
  }
  
  async updateActiveStatus(req: any): Promise<any> {
    const post: any = await this.repo.posts.updateActiveStatus(req.params.id, req.body.is_active);
    return post;
  }

  async delete(req: any): Promise<any> {
    const post: any = await this.repo.posts.delete(req.params.id);
    return post;
  }
  
  async update(req: any): Promise<any> {
    const data: Post = req.body;
    data.updated_by = req.user.userId;
    data.updated_at = new Date();
    const post: any = await this.repo.posts.update(data);
    return post;
  }

}
