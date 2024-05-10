import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Like } from "../../models/like.model";
import { Repositories } from "../../dataAccess/repositories";
import { LikeService } from "../like.service";

@injectable()
export class LikeServiceImpl implements LikeService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createLike(req: any): Promise<any> {
    const data: Like = req.body;
    data.user = req.user.userId;
    data.created_by = req.user.userId;
    data.created_at = new Date();
    return await this.repo.likes.create(data);
  }

  async getLikes(req: any): Promise<any> {
    const res: any = await this.repo.likes.get(req);
    const like: Like[] = res.data;

    return { like, ...res.page_info };
  }

  async getLike(req: any): Promise<any> {
    const like: any = await this.repo.likes.getById(req.params.id);
    return like;
  }
}
