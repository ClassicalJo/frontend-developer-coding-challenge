import styled, { css } from "styled-components";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import textStyles from "../commonStyles/text";

const fullRow = css`
    grid-column: 1 span 12 ;
`
export const StyledProducts = styled.div`
    max-width: 1464px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const StyledGrid = styled.div`
    display: grid;
    margin: 60px 0;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap:25px;
`


export const StyledTitle = styled.p`
    ${fullRow}
    ${textStyles.desktop.titles.l2}    
    ${mixins.gradientText(colors.brand.default)}
    margin-bottom: 40px;
`
export const StyledSpan = styled.span`
    color: ${colors.neutrals["900"]};
    background: none;
    background-clip: initial;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
    
`
