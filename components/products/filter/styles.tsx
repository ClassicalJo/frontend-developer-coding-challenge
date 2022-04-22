import styled from "styled-components"
import mixins from "../../commonStyles/mixins"
import textStyles from "../../commonStyles/text"
import colors from "../../commonStyles/colors"
import SelectionButton from "./SelectionButton"
import Option from "./Option"
import UnstyledNextImage from "../../commonStyles/StyledNextImage"

export const StyledFilterBar = styled.div`
    ${mixins.fullRow}
    ${textStyles.desktop.texts.l1.default}
    display: flex;    
`

export const StyledFilterBarContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledFilterText = styled.p`
    color: ${colors.neutrals["600"]};
`
export const StyledVerticalSeparator = styled.div`
    border-right: 2px solid ${colors.neutrals["300"]};
    margin-right:30px;
    height:100%;
`
export const StyledFilterSelect = styled.select`
    ${textStyles.desktop.texts.l1.default}
    color: ${colors.neutrals["600"]};
    border: 1px solid ${colors.neutrals["300"]};
    margin-left: 10px;
    border-radius: 16px;
    padding: 16px 22px;
    padding-right: 90px;
    -webkit-appearance: none;
    appearance: none;
`
export const StyledFilterSelectWrapper = styled.div`
    position: relative;
    margin-right: 30px;
    &::after {
        content: "▼";
        font-size:13px;
        top: 27.5%;
        right: 10px;
        position: absolute;
    }
`
export const StyledOption = styled(Option)`
    color: inherit;
    ${textStyles.desktop.texts.l1.default}
`

export const StyledSelectedBackground = styled.div`
        background: ${colors.brand.default};
        padding: 7px 24px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
`
export const StyledSelectedButton = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
`
export const StyledSelectedButtonText = styled.p`
    color: ${colors.neutrals["100"]};
`

export const StyledUnselectedBackground = styled.div`
        background: ${colors.neutrals['200']};
        padding: 7px 24px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
`
export const StyledUnselectedButton = styled.div`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
`
export const StyledUnselectedButtonText = styled.p`
        ${mixins.gradientText(colors.brand.default)}
        
`
export const StyledPageSelector = styled.div`
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding:10px;
    /* flex:1; */
`

export const StyledPageText = styled.p`
    ${textStyles.desktop.texts.l1.lightweight}    
    ${mixins.gradientText(colors.brand.default)}
    min-width: 150px;
    text-align: center;
    
`
export const StyledPageSpan = styled.span`
    color: ${colors.neutrals["600"]};
    background: none;
    background-clip: initial;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
    
`

const PageButton = (rotate: number) => styled(UnstyledNextImage)`
    width: 40px;
    height: 40px;
    background-color: ${colors.neutrals["200"]};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(${rotate}deg);
    border-radius: 8px;
    
`
export const StyledPageButtonLeft = PageButton(180)
export const StyledPageButtonRight = PageButton(0)