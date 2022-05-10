import dynamic from 'next/dynamic';
import React, { forwardRef, Suspense } from 'react';
import { ProductsData, UserData } from '../types';
const Products = dynamic(() => import('./Products'), { ssr: false })

interface WrappedProductsProps {
    ref: React.Ref<HTMLDivElement>;
    products: ProductsData;
    userData: UserData;
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;

}
const ForwardRefProducts = forwardRef((props: WrappedProductsProps, ref: React.Ref<HTMLDivElement>) => (
    <Suspense fallback="">
        <Products {...props} productRef={ref} />
    </Suspense>
))
ForwardRefProducts.displayName = "Products"
export default ForwardRefProducts