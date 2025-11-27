import type { Request, Response } from 'express';
export declare class ItemController {
    static createItem(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getItems(req: Request, res: Response): Promise<void>;
    static updateItem(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static deleteItem(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=item-controller.d.ts.map