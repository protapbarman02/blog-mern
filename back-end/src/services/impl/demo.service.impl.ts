import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Demo } from "../../models/demo.model";
import { Repositories } from "../../dataAccess/repositories";
import { DemoService } from "../demo.service";

@injectable()
export class DemoServiceImpl implements DemoService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createDemo(req: any): Promise<any> {
    const data: Demo = req.body;
    data.created_by = req.user.userId;
    return await this.repo.demo.create(data);
  }

  async getDemos(req: any): Promise<any> {
    const res: any = await this.repo.demo.get(req);
    const demo: Demo[] = res.data;

    return { demo, ...res.page_info };
  }

  async getDemo(req: any): Promise<any> {
    const demo: any = await this.repo.demo.getById(req.params.id);
    return demo;
  }
}
