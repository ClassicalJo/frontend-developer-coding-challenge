import { EffectUserData, ProductsData, UserData } from "../types";
import ProductCard from "./card";
import FilterBar from "./filter";
import { StyledProducts, StyledTitle, StyledSpan, StyledGrid } from "./styles";
import useFilter from "./useFilter";
import fetchRedeem from "../fetchRedeem";

interface AppProps {
    products: ProductsData
    userData: EffectUserData
    refreshUserData: () => void;
}
export default function Products({ products, userData, refreshUserData }: AppProps): JSX.Element {
    let { products: filteredProducts, startingIndex, endIndex, ...filterProps } = useFilter(products)
    let slicedProducts = filteredProducts.slice(startingIndex, endIndex)
    let redeemItem = (productId: string) => new Promise<void>(async (resolve, reject) => {
        try {
            await fetchRedeem(productId)
            refreshUserData()
            resolve()
        } catch(error) {
            console.log("This is where we handle the error message")
            reject()
        }
    })


    return (
        <StyledProducts>
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
                        redeem={() => redeemItem(k._id)}
                    />
                ))}
            </StyledGrid>
        </StyledProducts>
    )
}