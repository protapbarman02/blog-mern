import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Comment } from "../../models/comment.model";
import { Repositories } from "../../dataAccess/repositories";
import { CommentService } from "../comment.service";
import { GetCommentResDto } from "../../dtos/comment.dto";

@injectable()
export class CommentServiceImpl implements CommentService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createComment(req: any): Promise<any> {
    const data: Comment = req.body;
    data.author = req.user.userId;
    data.created_by = req.user.userId;
    data.created_at = new Date();
    return await this.repo.comments.create(data);
  }

  async getComments(req: any): Promise<any> {
    const res: any = await this.repo.comments.get(req);
    const comments: Comment[] = res.data.map(
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

    return { comments, ...res.page_info };
  }

  async getComment(req: any): Promise<any> {
    const res: any = await this.repo.comments.getById(req.params.id);
    const comment: GetCommentResDto = new GetCommentResDto(
        res._id,
        res.post,
        res.author,
        res.content,
        res.created_at,
        res.is_active,
        `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}`
    );
    return  comment;
  }

  async updateActiveStatus(req: any): Promise<any> {
    const comment: any = await this.repo.comments.updateActiveStatus(req.params.id, req.body.is_active);
    return comment;
  }

  async delete(req: any): Promise<any> {
    const comment: any = await this.repo.comments.delete(req.params.id);
    return comment;
  }
    
  async update(req: any): Promise<any> {
    const data: Comment = req.body;
    data.updated_by = req.user.userId;
    data.updated_at = new Date();
    const comment: any = await this.repo.comments.update(data);
    return comment;
  }

  async getByPostId(req: any): Promise<any> {
    const res: any = await this.repo.comments.getByPostId(req);
    const comments: any = res.data.map(
      (comment: any) =>
        new GetCommentResDto(
          comment._id,
          comment.post,
          comment.author,
          comment.content,
          comment.created_at,
          comment.is_active,
          `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}${comment._id}`
        )
    );

    return { comments, ...res.page_info };
  }
}
