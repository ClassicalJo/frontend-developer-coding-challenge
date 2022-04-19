import styled, { css } from "styled-components";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import textStyles from "../commonStyles/text";
import ProductCard from "./ProductCard";

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
`
export const StyledProductCard = styled(ProductCard)`
    border: 5px solid lightcoral;
    width: 100%;
    height: 100%;
    grid-column: span 3;
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
