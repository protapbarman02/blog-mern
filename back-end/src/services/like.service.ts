export interface LikeService {
    createLike(req: any): Promise<any>;
    getLikes(req: any): Promise<any>;
    getLike(req: any): Promise<any>;
  }
  