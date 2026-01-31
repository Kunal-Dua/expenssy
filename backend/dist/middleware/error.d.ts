import type { NextFunction, Request, Response } from "express";
export interface ErrorWithStatus extends Error {
    statusCode?: number;
}
declare const globalErrorHandler: (err: unknown, req: Request, res: Response, next: NextFunction) => void;
export default globalErrorHandler;
//# sourceMappingURL=error.d.ts.map