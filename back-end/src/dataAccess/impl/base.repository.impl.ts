import { ObjectId, Schema } from "mongoose";
import { BaseRepository } from "../base.repository";

export class BaseRepositoryImpl<Model> implements BaseRepository<Model> {
  protected readonly entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  async create(data: Model): Promise<Model> {
    return await this.entity.create(data);
  }

  async get(req: any): Promise<any> {
    // get params
    const search_text: string = req.query.search_text;
    const sort: string = req.query.sort;
    const filter: string = req.query.filter;
    const page: number | any = req.query.page ? Number(req.query.page) : null;
    const limit: number | any = req.query.limit
      ? Number(req.query.limit)
      : null;

    // get url
    const url: string = req.originalUrl;

    // query
    let query: any = this.entity.find();

    // search
    if (search_text) {
      // get model fields
      const fieldNames = Object.keys(this.entity.schema.paths);

      // get string fields
      const stringFieldNames = fieldNames.filter((fieldName) => {
        const field = this.entity.schema.paths[fieldName];
        return field && field.instance === "String";
      });

      // create search regex
      const searchRegex = new RegExp(search_text, "i");

      // query
      query = query.find({
        $or: stringFieldNames.map((fieldName) => ({
          [fieldName]: { $regex: searchRegex },
        })),
      });
    }

    // sort
    if (sort) {
      const sortItems: any[] = JSON.parse(sort);
      query = query.sort(...sortItems);
    }

    // filter
    if (filter) {
      const filterItems: any[] = JSON.parse(filter);
      query = query.find(...filterItems);
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

  async getById(id: ObjectId): Promise<Model> {
    return await this.entity.findById(id);
  }

  async update(data: any): Promise<Model> {
    return await this.entity.findByIdAndUpdate(data._id, data, { new: true });
  }

  async updateActiveStatus(id: ObjectId, isActive: boolean): Promise<Model> {
    return await this.entity.findByIdAndUpdate(
      id,
      { is_active: isActive },
      { new: true }
    );
  }

  async delete(id: ObjectId): Promise<Model> {
    return await this.entity.findByIdAndDelete(id);
  }
}
