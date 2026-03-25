import { Request } from "express";
export interface IUSer{
    id:string;
    email: string;
    password: string;
    name: string;
}

export interface IUserCreate{
    email: string;
    password: string;
    name: string;
}
export interface IUSerUpdate{
    name?: string;
    password?: string;
    email?: string;
}

export interface IUserLogin{
    email: string;
    password: string;
}
