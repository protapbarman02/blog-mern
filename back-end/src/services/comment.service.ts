export interface CommentService {
    createComment(req: any): Promise<any>;
    getComments(req: any): Promise<any>;
    getComment(req: any): Promise<any>;
  }
  