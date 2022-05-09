import styled, { css } from "styled-components"
import breakpoints from "../../breakpoints"
import colors from "../../commonStyles/colors"
import mixins from "../../commonStyles/mixins"
import UnstyledNextImage from "../../commonStyles/StyledNextImage"
import textStyles from "../../commonStyles/text"
import Placeholder from "./Placeholder"

export const StyledProductCard = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap:15px;
    grid-column: span 12;
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    @media (min-width: ${breakpoints.tablet}){
        grid-column: span 4;
    }
    @media (min-width: ${breakpoints.desktop}){
        grid-column: span 3;
    }
`
export const StyledImageZone = styled.div`
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 25px;   
`
export const StyledButtonZone = styled.div`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
`

export const StyledProductPicture = styled(UnstyledNextImage)`
    position: absolute;
    
    width: 280px;
    height: 204px;
`

export const StyledProductTitle = styled.div`
    color: ${colors.neutrals['900']};
`

export const StyledProductSubtitle = styled.div`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l2.caps,
    textStyles.mobile.texts.l2.caps)}
    color: ${colors.neutrals['600']};
`

const buttonMixin = css`
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    gap: 10px;
`
export const StyledProductButton = styled.div`
    ${buttonMixin}
    background: ${colors.brand.default};
    color: white;
    user-select: none;
    cursor: pointer;
    :hover, :active {
        background: ${colors.brand.hover};
    }
    
`
export const StyledProductProcessing = styled.div`
    ${buttonMixin}
    background: ${colors.specials.illustrationBG};
    color: white;

`
export const StyledProductUnavailable = styled.div`
    ${buttonMixin}
    background: ${colors.neutrals["200"]};
    color: ${colors.neutrals["600"]};
`

export const StyledButtonIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(24, 20)}    
`

export const StyledTextZone = styled.div`
    padding: 21px 24px;
`
interface SkeletonProps {
    done: Boolean;
}
export const StyledSkeleton = styled.div<SkeletonProps>`
    width:100%;
    height:204px;
    ${mixins.centerDiv}
    top: 0;
    ${props => {
        if (props.done) return `
            display: none;
        `
        else return `
            display: flex;
        `
    }}
`
export const StyledSkeletonWrapper = styled.div`
    ${mixins.centerDiv}
    

`
export const StyledPlaceholder = styled(Placeholder)`
    width:75px;
    height:75px;
`

export const StyledPictureContainer = styled.div`
    min-height: 345px;
    ${mixins.centerDiv}
    border-bottom: 1px solid ${colors.neutrals["300"]};
    
`