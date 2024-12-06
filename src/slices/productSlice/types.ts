export interface IProduct {
    id: string;
    name: string;
    description: string;
    info: string;
    details: string;
    like: boolean;
    picture: {
        path: string;
        alt: string;
    };
    price: {
        value: number;
        currency: string;
    };
    
}

export interface IProductState {
    product: IProduct | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}