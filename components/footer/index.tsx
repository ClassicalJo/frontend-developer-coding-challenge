import { StyledFooter, StyledFooterIcon, StyledFooterText } from "./styles";
import githubActive from '../../assets/icons/github-active.svg'
import githubDefault from '../../assets/icons/github-default.svg'

export default function Footer(): JSX.Element {
    return (
        <StyledFooter>
            <StyledFooterIcon src={githubDefault} width={32} height={32}/>
            <StyledFooterText>View this repository</StyledFooterText>
        </StyledFooter>
    )
}