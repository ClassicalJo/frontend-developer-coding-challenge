import styled from "styled-components";
import colors from "../../commonStyles/colors";
import mixins from "../../commonStyles/mixins";
import textStyles from "../../commonStyles/text";

export const StyledNavigationBar = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
`
export const StyledNavigationTextWrapper = styled.div`
    position: absolute;
    ${textStyles.desktop.texts.l1.default}
    ${mixins.centerDiv}
    flex:1;
    width:100%;
    height: 100%;
`
export const StyledNavigationText = styled.div`
    ${mixins.gradientText(colors.brand.default)}
`
export const StyledNavigationTextSpan = styled.span`
    
    ${mixins.removeGradientText}
    color: ${colors.neutrals["600"]}
    
`