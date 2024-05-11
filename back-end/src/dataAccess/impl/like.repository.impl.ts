import { Like } from "../../models/like.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { LikeRepository } from "../like.repository";
import { ObjectId } from "mongoose";

export class LikeRepositoryImpl
  extends BaseRepositoryImpl<Like>
  implements LikeRepository
{
  constructor(entity: any) {
    super(entity);
  }

  async getByPostId(req: any): Promise<any> {
    // get params
    const sort: string = req.query.like_sort? String( req.query.like_sort): "";
    const filter: string = req.query.like_filter? String( req.query.like_filter): "";
    const page: number | any = req.query.like_page ? Number(req.query.like_page) : null;
    const limit: number | any = req.query.like_limit ? Number(req.query.like_limit) : null;

    // get url
    const url: string = req.originalUrl.replace(/^\/api/, '');

    // query
    let query: any = this.entity.find();

    // sort
    if (sort!="") {
      const sortItems: any[] = JSON.parse(sort);
      query = query.sort(...sortItems);
    }

    query=query.find({ post:req.params.id })
    // filter
    if (filter!="") {
      const filterItems: any[] = JSON.parse(filter);
      const filterObject: Record<string, any> = {};
      for (const filterItem of filterItems) {
        for (const [fieldName, filterValue] of Object.entries(filterItem)) {
          filterObject[fieldName] = filterValue;
        }
      }
      query = query.find(filterObject);
    }

    // get total
    const tempQuery: any = query.clone();
    const total: number = (await tempQuery.exec()).length;

    // pagination
    if (page && limit) {
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
    }

    // get items
    const items: any[] = await query.exec();

    // get total page
    const total_page = Math.ceil(total / limit);

    // current page
    const current_page = page;

    // prev page url
    const prev_page =
      page === null || limit === null || page <= 1
        ? null
        : `${url.substring(0, url.indexOf("=", url.indexOf("page")))}=${
            page - 1
          }${url.substring(
            url.indexOf("&", url.indexOf("page=")),
            url.length
          )}`;

    // next page url
    const next_page =
      page === null || limit === null || total_page < page + 1
        ? null
        : `${url.substring(0, url.indexOf("=", url.indexOf("page")))}=${
            page + 1
          }${url.substring(
            url.indexOf("&", url.indexOf("page=")),
            url.length
          )}`;

    return {
     data: items, 
     page_info: {
      limit,
      total,
      total_page,
      current_page,
      prev_page,
      next_page,
    },
    };
  }
  async getAllByPostId(postId: ObjectId): Promise<any> {
    const data: Like[] = await this.entity.find({ post:postId });
    const totalCount: number = data.length;
    return { data, totalCount}
  }
}