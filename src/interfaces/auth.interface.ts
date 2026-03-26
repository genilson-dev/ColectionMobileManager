import { Request } from "express";
import {IUserResponse} from "./user.interface"

export interface IAuthRequest extends Request {
    userId?: string;
}

export interface IAuthResponse {
    user: IUserResponse;
    token: string;
}

export interface ITokenPayload {
    userId: string;   
    iat: number;
    exp: number;
}
