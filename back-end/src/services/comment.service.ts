export interface CommentService {
    createComment(req: any): Promise<any>;
    getComments(req: any): Promise<any>;
    getComment(req: any): Promise<any>;
    updateActiveStatus(req: any): Promise<any>;
    delete(req: any): Promise<any>;
    // getCommentsByPost(postId: any): Promise<any>;
  }
  