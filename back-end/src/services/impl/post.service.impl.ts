import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Post } from "../../models/post.model";
import { Repositories } from "../../dataAccess/repositories";
import { PostService } from "../post.service";
import { GetPostResDto } from "../../dtos/post.dto";

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
    const post: Post[] = res.data.map(
      (post: any) =>
        new GetPostResDto(
          post._id,
          post.author,
          post.title,
          post.content,
          post.images,
          post.created_at,
          post.is_active,
          `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}/${post._id}`
        )
    );
    return { post, ...res.page_info };
  }

  async getPost(req: any): Promise<any> {
    const res: any = await this.repo.posts.getById(req.params.id);
    const post: GetPostResDto = new GetPostResDto(
      res._id,
      res.author,
      res.title,
      res.content,
      res.images,
      res.created_at,
      res.is_active,
      `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}/${res._id}`
    );
    
  }
  
  async updateActiveStatus(req: any): Promise<any> {
    const post: any = await this.repo.posts.updateActiveStatus(req.params.id, req.body.is_active);
    return post;
  }

  async delete(req: any): Promise<any> {
    const post: any = await this.repo.posts.delete(req.params.id);
    return post;
  }
  
}
