import { useState } from "react";
import { Product } from "../../types";
import { StyledPictureContainer, StyledPlaceholder, StyledProductPicture, StyledSkeleton, StyledSkeletonWrapper } from "./styles";

interface AppProps {
    product: Product
}
export default function Picture({ product }: AppProps): JSX.Element {
    let [isLoading, setIsLoading] = useState<Boolean>(false)

    return (
        <StyledPictureContainer>
            <StyledSkeleton style={{display: isLoading ? "none" : "flex"}}>
                <StyledSkeletonWrapper>
                    <StyledPlaceholder />
                </StyledSkeletonWrapper>
            </StyledSkeleton>
            <StyledProductPicture
                onLoad={() => setIsLoading(true)}
                src={product.img.url}
                width={500}
                height={500}
                objectFit='none'
            />
        </StyledPictureContainer>
    )
}