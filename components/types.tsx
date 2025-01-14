import { StaticImageData } from "next/image";

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

export type ProductsData = Product[];

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
export type FilterMethod = 'All products' | 'Gaming' | 'Audio' | 'Smart Home' | 'Monitors & TV'
export type SortMethod = 'recent' | 'lowest-price' | 'highest-price'
export type ValidCharge = 1000 | 5000 | 7500

export interface StyledProplessComponent {
    className?: string
}

export interface CardElement {
    title: string;
    subtitle: string;
    abridgedSubtitle: string;
    desktop: StaticImageData;
    responsive: StaticImageData;
    icon: StaticImageData;
    alt: string;
}

export interface ToastElement {
    isError: Boolean;
    message: string;
    item: string;
}

export type SuccessMessage<T> = T
export type ErrorMessage = { error: any }
export type Result<T> = SuccessMessage<T> | ErrorMessage