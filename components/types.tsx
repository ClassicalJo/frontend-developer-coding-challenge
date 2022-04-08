export interface RedeemHistory {
    productId: string
}
export interface UserData {
    _id: string;
    name: string;
    points: number;
    createDate: Date;
    redeemHistory: RedeemHistory[];
}
export type ProductsData = Product[]

export interface Product {
    _id: string;
    name: string;
    cost: number;
    category: string;
    img: ProductImage;
}

export interface ProductImage {
    url: string;
    hdUrl: string;
}
export type FilterMethod = 'all' | 'Gaming' | 'Audio' | 'Smart Home' | 'Monitors & TV'
export type SortMethod = 'recent' | 'lowest-price' | 'highest-price'
export type ValidCharge =  1000 | 5000 | 7500