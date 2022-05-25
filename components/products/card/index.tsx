import { Product, UserData } from "../../types"
import aeropay1 from '../../../assets/icons/aeropay-1-custom.svg'
import aeropay3 from '../../../assets/icons/aeropay-3.svg'
import Button from "./Button"

import {
    StyledImageZone,
    StyledProductCard,
    StyledProductSubtitle,
    StyledProductTitle,
    StyledTextZone
} from "./styles"
import Picture from "./Picture"


interface AppProps {
    product: Product;
    userData: UserData;
    redeem: () => Promise<void>;

}
export default function ProductCard({ product, userData, redeem }: AppProps): JSX.Element {
    return (
        <StyledProductCard>
            <StyledImageZone>
                <Picture product={product} />
                <StyledTextZone>
                    <StyledProductTitle>{product.name}</StyledProductTitle>
                    <StyledProductSubtitle>{product.category}</StyledProductSubtitle>
                </StyledTextZone>
            </StyledImageZone>

            <Button
                cost={product.cost}
                availableIcon={aeropay3}
                unavailableIcon={aeropay1}
                userData={userData}
                redeem={redeem}
            />
        </StyledProductCard>
    )
}