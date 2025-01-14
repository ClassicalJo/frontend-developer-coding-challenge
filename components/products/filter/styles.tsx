import styled from "styled-components"
import mixins from "../../commonStyles/mixins"
import textStyles from "../../commonStyles/text"
import colors from "../../commonStyles/colors"
import Option from "./Option"
import UnstyledNextImage from "../../commonStyles/StyledNextImage"
import breakpoints from "../../breakpoints"
import PageSelector from "./PageSelector"


export const StyledFilterBar = styled.div`
    ${mixins.fullRow}
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    display: flex;    
    @media (min-width: ${breakpoints.desktop}) {
        align-items: center;    
    }
`

export const StyledFilterBarContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

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
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}    
`

export const StyledSelectedButtonWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height:20px;
    overflow: hidden;
    flex:1 1 100%;
    margin-top: 32px;;
    height:45px;
    @media (min-width: ${breakpoints.desktop}){
        flex:1;
        margin-top: 0px;
    }
`
interface SelectButtonContainerProps {
    offsetX: number;
}
export const StyledSelectedButtonContainer = styled.div.attrs<SelectButtonContainerProps>(
    (props) => ({
        style: {
            left: props.offsetX,
        }
        
    }))<SelectButtonContainerProps>
    `
    position: absolute;
    display: flex;
    gap: 10px;
    align-items: center;

    @media (min-width: ${breakpoints.desktop}) {
        flex:1;
    left:initial;
    }
    `

interface SelectedButton {
    selected: Boolean;
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
        @media (min-width: ${breakpoints.tablet}){
            width:165px;
        height:43px;    
    }
        `


export const StyledSelectedButtonText = styled.p<SelectedButton>`
            ${props => {
        if (props.selected) return `color: ${colors.neutrals["100"]};`
        else return mixins.gradientText(colors.brand.default)
    }}

            `

export const StyledPageSelector = styled(PageSelector)`
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