import { StyledFooter, StyledFooterIcon, StyledFooterText, StyledFooterWrapper } from "./styles";
import githubActive from '../../assets/icons/github-active.svg'
import githubDefault from '../../assets/icons/github-default.svg'
import { useEffect, useState } from "react";

export default function Footer(): JSX.Element {
    let [isActive, setIsActive] = useState<Boolean>(false)
    let active = () => setIsActive(true)
    useEffect(() => {
        let inactive = () => setIsActive(false)
        window.addEventListener('mouseup', inactive)
        return () => window.removeEventListener('mouseup', inactive)
    }, [])
    return (
        <StyledFooter onMouseDown={active} onBlur={() => setIsActive(false)}>
            <StyledFooterWrapper
                draggable={false}
                href="http://google.com" target="_blank" rel="noopener noreferrer">
                <StyledFooterIcon
                    draggable={false}
                    src={isActive ? githubActive : githubDefault}
                    width={32}
                    height={32}
                />
                <StyledFooterText>View this repository</StyledFooterText>
            </StyledFooterWrapper>
        </StyledFooter>
    )
}