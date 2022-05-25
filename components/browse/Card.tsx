import { useEffect, useState } from 'react'
import { CardElement } from "../types"
import {
    StyledCard, StyledIcon, StyledIconWrapper,
    StyledSubtitle, StyledTextArea, StyledTitle,
    StyledTitleWrapper,
    StyledWalkImage,
    StyledWalkImageWrapper
} from "./styles"

export default function Card({ desktop, responsive, icon, title, subtitle, abridgedSubtitle, alt }: CardElement): JSX.Element {
    let [isDesktop, setIsDesktop] = useState<Boolean>(true)
    useEffect(() => {
        function resize() {
            if (window.innerWidth >= 1920) setIsDesktop(true)
            else setIsDesktop(false)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    return (
        <StyledCard>
            <StyledWalkImageWrapper>
                <StyledWalkImage
                    src={isDesktop ? desktop : responsive}
                    width={isDesktop ? desktop.width : responsive.width}
                    height={isDesktop ? desktop.height : responsive.width}
                    alt={alt}
                />
            </StyledWalkImageWrapper>
            <StyledTextArea>
                <StyledTitleWrapper>
                    <StyledIconWrapper  >
                        <StyledIcon src={icon} width={39} height={39} alt=""/>
                    </StyledIconWrapper>
                    <StyledTitle>
                        {title}
                    </StyledTitle>
                </StyledTitleWrapper>
                <StyledSubtitle>
                    {isDesktop ? subtitle : abridgedSubtitle}
                </StyledSubtitle>
            </StyledTextArea>
        </StyledCard>
    )

}