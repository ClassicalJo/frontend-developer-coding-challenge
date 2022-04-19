import { ProductsData } from "../types";
import FilterBar from "./filter";
import { StyledProducts, StyledProductCard, StyledTitle, StyledSpan, StyledGrid } from "./styles";
import useFilter from "./useFilter";

interface AppProps {
    products: ProductsData
}
export default function Products({ products }: AppProps): JSX.Element {
    let { products: filteredProducts, startingIndex, endIndex, ...filterProps } = useFilter(products)
    let slicedProducts = filteredProducts.slice(startingIndex, endIndex)
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
                    <StyledProductCard
                        key={`productCard${i}`}
                        product={k}
                    />
                ))}
            </StyledGrid>
        </StyledProducts>
    )
}