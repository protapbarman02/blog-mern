import { Demo } from "../../models/demo.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { DemoRepository } from "../demo.repository";

export class DemoRepositoryImpl
  extends BaseRepositoryImpl<Demo>
  implements DemoRepository
{
  constructor(entity: any) {
    super(entity);
  }
}
