import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Like } from "../../models/like.model";
import { Repositories } from "../../dataAccess/repositories";
import { LikeService } from "../like.service";
import { GetLikeResDto } from "../../dtos/like.dto";

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
    const like: Like[] = res.data.map(
      (like: any) =>
        new GetLikeResDto(
          like._id,
          like.user,
          like.post,
          like.created_at,
          like.is_active
        )
    );

    return { like, ...res.page_info };
  }

  async getLike(req: any): Promise<any> {
    const res: any = await this.repo.likes.getById(req.params.id);
    const like : GetLikeResDto = new GetLikeResDto(
      res._id,
      res.user,
      res.post,
      res.created_at,
      res.is_active
    )
    return like;
  }

  async updateActiveStatus(req: any): Promise<any> {
    const like: any = await this.repo.likes.updateActiveStatus(req.params.id, req.body.is_active);
    return like;
  }

  async delete(req: any): Promise<any> {
    const like: any = await this.repo.likes.delete(req.params.id);
    return like;
  }
  
  async getByPostId(req: any): Promise<any> {
    const res: any = await this.repo.likes.getByPostId(req.params.post_id);
    const likes: Like[] = res.map(
      (like: any) =>
        new GetLikeResDto(
          like._id,
            like.user,
            like.post,
            like.created_at,
            like.is_active
        )
    );

    return { likes, ...res.page_info };
  }

}
