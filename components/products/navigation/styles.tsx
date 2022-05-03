import { Dispatch } from "react";
import styled from "styled-components";
import breakpoints from "../../breakpoints";
import colors from "../../commonStyles/colors";
import mixins from "../../commonStyles/mixins";
import textStyles from "../../commonStyles/text";
import PageSelector from "../filter/PageSelector";

export const StyledNavigationBar = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
    flex-wrap: wrap;
`
export const StyledNavigationTextWrapper = styled.div`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    ${mixins.centerDiv}
    flex: 1 1 100%;
    order: 2;
    
    @media (min-width: ${breakpoints.desktop}){
        position: absolute;
        flex:1;
        width:100%;
        height: 100%;
        order:1;
    }
`
export const StyledNavigationText = styled.div`
    ${mixins.gradientText(colors.brand.default)}
`
export const StyledNavigationTextSpan = styled.span`
    ${mixins.removeGradientText}
    color: ${colors.neutrals["600"]}
`

export const StyledNavigationPageSelectorWrapper = styled.div`
    ${mixins.centerDiv}
    flex:1 1 100%;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.desktop}){
        flex:0
    }
`

export const StyledNavigationPageSelector = styled(PageSelector)`
    border: 1px solid ${colors.neutrals["300"]};
    width: 259px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding:12px 16px;
`