export interface UsersType {
    users: User[];
}

export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    cart: Cart[];
    wishlist: Cart[];
}

export interface Cart {
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
    quantity?: number;
}

export interface Review {
    id: number;
    userId: number;
    rating: number;
    comment: string;
    date: Date;
}
