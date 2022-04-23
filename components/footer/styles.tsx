import styled from "styled-components";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import UnstyledNextImage from "../commonStyles/StyledNextImage";
import textStyles from "../commonStyles/text";

export const StyledFooter = styled.div`
    ${mixins.centerDiv}
    height:200px;
    gap:10px;   
`

export const StyledFooterText = styled.p`
    ${textStyles.desktop.texts.l1.default}
    color: ${colors.neutrals["600"]}
`
export const StyledFooterIcon = styled(UnstyledNextImage)`
    width: 32px;
    height: 32px;
`