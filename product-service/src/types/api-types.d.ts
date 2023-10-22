
export interface Product {
    count: number;
    description: string;
    id: string;
    price: number;
    title: string;
}

export interface ProductsListResponse {
    products: Product[];
}

export interface ProductResponse {
    product: Product;
}

export interface HelloDTO {
    name: string;
}
