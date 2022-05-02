import styled from "styled-components"
import mixins from "../../commonStyles/mixins"
import textStyles from "../../commonStyles/text"
import colors from "../../commonStyles/colors"
import Option from "./Option"
import UnstyledNextImage from "../../commonStyles/StyledNextImage"
import breakpoints from "../../breakpoints"

export const StyledFilterBar = styled.div`
    ${mixins.fullRow}
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    display: flex;    
`

export const StyledFilterBarContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: -10px;
    max-width: 100%;
    @media (min-width: ${breakpoints.desktop}){
        margin: 0px;
    }
`

export const StyledFilterText = styled.p`
    color: ${colors.neutrals["600"]};
    display: none;
    @media (min-width: ${breakpoints.desktop}){
        display: inline;
    }
`
export const StyledVerticalSeparator = styled.div`
    border-right: 2px solid ${colors.neutrals["300"]};
    margin-right:30px;
    height:100%;
    display: none;
    @media (min-width: ${breakpoints.desktop}){
        display:inline;
    }
`
export const StyledFilterSelect = styled.select`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    width: 256px;
    height: 59px;
    color: ${colors.neutrals["600"]};
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 16px;
    padding-left: 16px;
    -webkit-appearance: none;
    appearance: none;
    @media (min-width: ${breakpoints.desktop}){
        margin-left: 10px;
    }
`
export const StyledFilterSelectWrapper = styled.div`
    position: relative;
    margin:10px;
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
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}    
`

export const StyledSelectedButtonContainer = styled.div`
    margin:10px;
    display: flex;
    gap: 10px;
    align-items: center;
    flex:1 1 100%;
    overflow-x: scroll;
    max-width: 100vw;
    @media (min-width: ${breakpoints.desktop}) {
        flex:1;
        margin:10px;
    }
`

interface SelectedButton {
    selected: boolean;
}

export const StyledSelectedButton = styled.div`
        cursor: pointer;
        user-select: none;
        border-radius: 12px;
`

export const StyledSelectedBackground = styled.div <SelectedButton>`
    ${mixins.centerDiv}    
    border-radius: 12px;
    ${props => {
        if (props.selected) return `
        background: ${colors.brand.default};
        animation: colorBackground .15s forwards;
        `
        else return `background: ${colors.brand.light};`
    }}
    width:136px;
    height:40px;
    @media (min-width: ${breakpoints.mobile}){
        width:173px;
        height:43px;
    }
`


export const StyledSelectedButtonText = styled.p<SelectedButton>`
    ${props => {
        if (props.selected) return `color: ${colors.neutrals["100"]};`
        else return mixins.gradientText(colors.brand.default)
    }}
    
`

export const StyledPageSelector = styled.div`
    border: 1px solid ${colors.neutrals["300"]};
    width: 259px;
    height: 64px;
    border-radius: 16px;
    display: none;
    align-items: center;
    padding:12px 16px;
    @media (min-width: ${breakpoints.tablet}){
        display: flex;
    }
`

export const StyledPageText = styled.p`
    ${mixins.gradientText(colors.brand.default)}
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    flex:1;
    text-align: center;
`
export const StyledPageSpan = styled.span`
    ${mixins.removeGradientText}
    color: ${colors.neutrals["600"]};
    
`
interface PageButtonProps {
    disabled: Boolean;
}
export const StyledPageButtonWrapper = styled.div<PageButtonProps>`
    ${mixins.centerDiv}
    background-color: ${colors.neutrals["200"]};
    width: 40px;
    height: 40px;
    border-radius: 8px;
    user-select: none;
    ${props => !props.disabled && `
        cursor: pointer;    
        :hover:active {
            background-color: ${colors.brand.light2};
        }
    `}
`

const PageButton = (rotate: number) => styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(24, 20)}
    transform: rotate(${rotate}deg);
`
export const StyledPageButtonLeft = PageButton(180)
export const StyledPageButtonRight = PageButton(0)