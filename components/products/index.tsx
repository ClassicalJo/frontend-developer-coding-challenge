import React from 'react'
import { EffectUserData, ProductsData, UserData } from "../types";
import ProductCard from "./card";
import FilterBar from "./filter";
import { StyledProducts, StyledTitle, StyledSpan, StyledGrid } from "./styles";
import useFilter from "./useFilter";
import fetchRedeem from "../fetchRedeem";
import NavigationBar from "./navigation";

interface AppProps {
    products: ProductsData
    userData: EffectUserData
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
}
const Products = React.forwardRef<HTMLDivElement, AppProps>(({ products, userData, refreshUserData, errorToast, successToast }: AppProps, ref) => {
    let { products: filteredProducts, startingIndex, endIndex, ...filterProps } = useFilter(products)
    let { changePage, totalPages, currentPage, productsPerPage } = filterProps
    let slicedProducts = filteredProducts.slice(startingIndex, endIndex)
    let redeemItem = (productId: string, name: string) => new Promise<void>(async (resolve, reject) => {
        try {
            await fetchRedeem(productId)
            refreshUserData()
            successToast(name)
            resolve()
        } catch (error) {
            errorToast()
            reject()
        }
    })


    return (
        <StyledProducts ref={ref}>
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
})
export default Products