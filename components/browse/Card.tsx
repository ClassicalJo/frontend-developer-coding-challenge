import Image from 'next/image'
import {
    StyledCard,
    StyledIconWrapper,
    StyledSubtitle,
    StyledTitle,
    StyledTitleWrapper,
    StyledWalkImage,
    StyledWalkImageWrapper,
    StyledTextArea
} from "./styles"
import { CardElement } from "../types"

export default function Card({ desktop, responsive, icon, title, subtitle }: CardElement): JSX.Element {
    return (
        <StyledCard>
            <StyledWalkImageWrapper>
                <StyledWalkImage
                    src={desktop}
                    width={desktop.width}
                    height={desktop.height}
                />
            </StyledWalkImageWrapper>
            <StyledTextArea>
                <StyledTitleWrapper>
                    <StyledIconWrapper>
                        <Image src={icon} width={39} height={39} />
                    </StyledIconWrapper>
                    <StyledTitle>
                        {title}
                    </StyledTitle>
                </StyledTitleWrapper>
                <StyledSubtitle>
                    {subtitle}
                </StyledSubtitle>
            </StyledTextArea>

        </StyledCard>
    )

}