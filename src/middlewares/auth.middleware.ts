import { Request,NextFunction } from "express";

import jwt from "jsonwebtoken";
import { IAuthRequest, ITokenPayload } from "../interfaces/auth.interface";

const JWT_SECRET = process.env.JWT_SECRET || "FallbackSecretKey";

export const authMiddleware = (req: IAuthRequest, res: any, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(401).json({message: "The Token is not provided"});
        return;
    }
    const token = authHeader.substring(7);
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as ITokenPayload;
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({message: "The token is invalid or expired"});
    }
}
