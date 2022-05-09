import { useState } from "react";
import { Product } from "../../types";
import { StyledPictureContainer, StyledPlaceholder, StyledProductPicture, StyledSkeleton, StyledSkeletonWrapper } from "./styles";

interface AppProps {
    product: Product
}
export default function Picture({ product }: AppProps): JSX.Element {
    let [done, setDone] = useState<Boolean>(false)

    return (
        <StyledPictureContainer>
            <StyledSkeleton done={done}>
                <StyledSkeletonWrapper>
                    <StyledPlaceholder />
                </StyledSkeletonWrapper>
            </StyledSkeleton>
            <StyledProductPicture
                onLoad={() => setDone(true)}
                src={product.img.url}
                width={280}
                height={204}
                alt={product.name}
            />
        </StyledPictureContainer>
    )
}