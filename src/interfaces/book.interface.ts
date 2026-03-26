export interface IBook {
    id: string;
    title: string;  
    author: string;
    description: string;
    publishedAt? : Date;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IBookCreate {
    title: string;
    author: string;
    description: string;
    publishedAt? : Date;
}

export interface IBookResponse extends IBook {
    user?:{
        name: string;
        email: string;
    }
}

