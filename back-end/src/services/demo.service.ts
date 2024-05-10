export interface DemoService {
    createDemo(req: any): Promise<any>;
    getDemos(req: any): Promise<any>;
    getDemo(req: any): Promise<any>;
  }
  