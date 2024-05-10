import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Post } from "../../models/post.model";
import { Repositories } from "../../dataAccess/repositories";
import { PostService } from "../post.service";

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
    const post: Post[] = res.data;

    return { post, ...res.page_info };
  }

  async getPost(req: any): Promise<any> {
    const post: any = await this.repo.posts.getById(req.params.id);
    return post;
  }
}
