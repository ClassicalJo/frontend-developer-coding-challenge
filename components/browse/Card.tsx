import Image from 'next/image'
import {
    StyledCard,
    StyledIconWrapper,
    StyledSubtitle,
    StyledTitle,
    StyledTitleWrapper,
    StyledWalkImage,
    StyledWalkImageWrapper,
    StyledTextArea,
    StyledIcon
} from "./styles"
import { CardElement } from "../types"
import { useEffect, useState } from 'react'

export default function Card({ desktop, responsive, icon, title, subtitle, abridgedSubtitle }: CardElement): JSX.Element {
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
                    //Replace alt with meaningful text
                    alt={title}
                />
            </StyledWalkImageWrapper>
            <StyledTextArea>
                <StyledTitleWrapper>
                    <StyledIconWrapper  >
                        <StyledIcon src={icon} width={39} height={39} alt="Star"/>
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