export interface ProductsType {
    products: Product[];
}

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string[];
    description: string;
    category: string;
    brand: string;
    rating: number;
    reviews: Review[];
    filters: string[];
}

export interface Review {
    id: number;
    userId: number;
    rating: number;
    comment: string;
    date: Date;
}
