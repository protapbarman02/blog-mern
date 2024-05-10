import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Comment } from "../../models/comment.model";
import { Repositories } from "../../dataAccess/repositories";
import { CommentService } from "../comment.service";

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
    const comment: Comment[] = res.data;

    return { comment, ...res.page_info };
  }

  async getComment(req: any): Promise<any> {
    const comment: any = await this.repo.comments.getById(req.params.id);
    return comment;
  }
}
