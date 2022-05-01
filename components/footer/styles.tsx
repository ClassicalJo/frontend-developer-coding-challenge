import styled from "styled-components";
import breakpoints from "../breakpoints";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import UnstyledNextImage from "../commonStyles/StyledNextImage";
import textStyles from "../commonStyles/text";

export const StyledFooter = styled.div`
    ${mixins.centerDiv}
    height: 120px;
    
    @media (min-width: ${breakpoints.desktop}){
        height:200px;
    }
    
`

export const StyledFooterWrapper = styled.a`
    ${mixins.centerDiv}
    border-radius: 15px;
    padding:10px 20px;
    cursor:pointer;
    user-select: none;
    gap:10px;   
    text-decoration: none;
    :active{
        ${mixins.gradientText(colors.brand.default)}
        animation: colorBackground30 .25s forwards;
    }
`
export const StyledFooterText = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    color: ${colors.neutrals["600"]};

`
export const StyledFooterIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(32, 24)}
`