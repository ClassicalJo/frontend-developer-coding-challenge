import styled, { css } from "styled-components"
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
    grid-column: span 3;
`
export const StyledImageZone = styled.div`
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 25px;   
`
export const StyledButtonZone = styled.div`
    ${textStyles.desktop.texts.l1.default}
`

export const StyledProductPicture = styled(UnstyledNextImage)`
    border-bottom: 1px solid ${colors.neutrals["300"]};
    width:100%;
    min-height:345px;
    height:345px;
    position: absolute;
    top: 0;
`

export const StyledProductTitle = styled.div`
    ${textStyles.desktop.texts.l1.default};
    color: ${colors.neutrals['900']};
    
`

export const StyledProductSubtitle = styled.div`
    ${textStyles.desktop.texts.l2.caps}
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
    width: 24px;
    height: 24px;
`
export const StyledButtonText = styled.p`
    
`

export const StyledTextZone = styled.div`
    padding: 21px 24px;
`
export const StyledSkeleton = styled.div`
    width:100%;
    height:345px;
    ${mixins.centerDiv}
    top: 0;
`
export const StyledSkeletonWrapper = styled.div`
    ${mixins.centerDiv}
    position: absolute;

`
export const StyledPlaceholder = styled(Placeholder)`
    width:75px;
    height:75px;
`

export const StyledPictureContainer = styled.div`
    width:100%;
    min-height:345px;
    height:345px;
    position:relative
`