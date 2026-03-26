export interface IProduct {
    id: string;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductCreate {
    name: string;
    description?: string;
    price: number;
    quantity: number;
    userId: string;
}

export interface IProductUpdate {
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
}

export interface IProductResponse extends IProduct {
    user?: {
        name: string;
        email: string;
    }
}

