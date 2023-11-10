
export interface Product {
    description: string;
    id: string;
    price: number;
    title: string;
}

export interface Stock {
    productId: string;
    count: number;
}

export interface ProductWithStock extends Product {
    count: number;
}

export interface ProductsListResponse {
    products: Product[];
}

export interface ProductResponse {
    product: Product;
}

export interface CreateProductDTO {
    title: string;
    description: string;
    price: number;
    count: number;
}

export interface HelloDTO {
    name: string;
}
