import React from 'react'
import { UserData, ProductsData } from "../types";
import ProductCard from "./card";
import FilterBar from "./filter";
import { StyledProducts, StyledTitle, StyledSpan, StyledGrid } from "./styles";
import useFilter from "./useFilter";
import fetchRedeem from "../fetchRedeem";
import NavigationBar from "./navigation";

interface AppProps {
    products: ProductsData
    userData: UserData
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
    productRef: React.Ref<HTMLDivElement>
}
export default function Products({ products, productRef, userData, refreshUserData, errorToast, successToast }: AppProps) {
    let { products: filteredProducts, startingIndex, endIndex, ...filterProps } = useFilter(products)
    let { changePage, totalPages, currentPage, productsPerPage } = filterProps
    let slicedProducts = filteredProducts.slice(startingIndex, endIndex)
    let redeemItem = async (productId: string, name: string) => {
        try {
            await fetchRedeem(productId)
            refreshUserData()
            successToast(name)
            
        } catch (error) {
            errorToast()            
        }
    }


    return (
        <StyledProducts ref={productRef}>
            <StyledTitle>
                {`TECH `}
                <StyledSpan>
                    PRODUCTS
                </StyledSpan>
            </StyledTitle>
            <FilterBar {...filterProps} />
            <StyledGrid>
                {slicedProducts.map((k, i) => (
                    <ProductCard
                        key={`productCard${i}`}
                        userData={userData}
                        product={k}
                        redeem={() => redeemItem(k._id, k.name)}
                    />
                ))}
            </StyledGrid>
            <NavigationBar
                showing={slicedProducts.length}
                total={filteredProducts.length}
                changePage={changePage}
                totalPages={totalPages}
                currentPage={currentPage}
                productsPerPage={productsPerPage}
            />
        </StyledProducts>
    )
}