import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
    statusCode: number;
}

export const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    console.error("Error Middleware Invoked", err);

    const statusCode = err.statusCode !== 200 ? err.statusCode : 500;
    const message = err.message || "An unexpected error occurred";

    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })        
    });

}
