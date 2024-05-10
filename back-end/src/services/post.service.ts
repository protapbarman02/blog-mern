export interface PostService {
    createPost(req: any): Promise<any>;
    getPosts(req: any): Promise<any>;
    getPost(req: any): Promise<any>;
    updateActiveStatus(req: any): Promise<any>;
    delete(req: any): Promise<any>;
  }
  