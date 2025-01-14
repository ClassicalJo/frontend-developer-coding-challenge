import { StaticImageData } from 'next/image'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'
import colors from '../../commonStyles/colors'
import mixins from '../../commonStyles/mixins'
import UnstyledNextImage from '../../commonStyles/StyledNextImage'
import textStyles from '../../commonStyles/text'
import AerocardWaves from './AerocardWaves'

interface UserCardProps {
    hide: Boolean
}
interface UserCardSelectPointsProps {
    current: Boolean
}
export const StyledBalance = styled.div`
    border:1px solid ${colors.neutrals["300"]};
    ${mixins.centerDiv}
    border-radius:16px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    position:relative;
    flex:1;
    user-select: none;
    cursor: pointer;
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
`
export const StyledBalancePoints = styled.div`

    ${mixins.centerDiv}
    ${mixins.gradientText(colors.brand.default)}
    pointer-events: none;
`
export const StyledBalanceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`

export const StyledBalanceLogo = styled(UnstyledNextImage)`
    ${mixins.centerDiv}
    margin:8px;
    margin-left: 16px;
    ${mixins.responsiveIcons(32, 24)}
`

interface ChevronProps {
    shouldRotate: Boolean;
    firstRender: Boolean;
    width: number;
    height: number;
    src: StaticImageData;
    alt: string;
}


export const StyledChevron = styled(({ shouldRotate, firstRender, ...rest }: ChevronProps) => <UnstyledNextImage {...rest}/>)`
    margin:12px 16px;
    ${props => `
        width: ${props.width}px;
        height: ${props.height}px;
    `}
    ${props => {
        if (props.firstRender) return `
            transform: rotate(90deg);
        `
        else if (props.shouldRotate) return `
            animation: rotateDown .3s forwards;
        `
        else return `
            animation: rotateUp .3s forwards;
    
        `
    }}
`

export const StyledUserCardContainer = styled.div<UserCardProps>`
    position: absolute;
    cursor: default;
    border-radius: 16px;
    border: 1px solid ${colors.neutrals["300"]};
    width:312px;
    height:404px;
    background: white;
    z-index: 10;
    right:-1px;    
    top:55px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${props => {
        if (!props.hide) return `
        animation: expandUserCard ease-in-out .5s forwards, appear .3s ease .1s backwards;
        `
        else return `
        animation: shrinkUserCard ease-in-out .5s forwards, disappear .1s ease .3s forwards;
        `
    }}
`

export const StyledUserCardTitle = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${colors.neutrals["300"]};   
`

export const StyledUserCardSection = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 20px;
    gap:24px;
`
export const StyledUserCardPointsWrapper = styled.div`
    display: flex;
    gap: 4px;
`
export const StyledUserCardPointsSelectWrapper = styled.div<UserCardSelectPointsProps>`
    ${mixins.centerDiv}
    cursor: pointer;
    flex:1;
    width:81px;
    height: 35px;
    border-radius: 12px;
    ${props => {
        if (props.current) return `
        background: ${colors.brand.default};
        animation: colorBackground .15s forwards;
        `
        return `
        background: ${colors.neutrals["200"]};
        `
    }}
       
`
export const StyledUserCardPointsSelect = styled.div<UserCardSelectPointsProps>`
    ${props => {
        if (props.current) return `
        color: white;
        `
        return mixins.gradientText(colors.brand.default)
    }}
`
export const StyledUserCardPointsButton = styled.div`
    background: ${colors.brand.default};
    color: white;
    padding:10px 0;
    border-radius: 16px;
    height:51px;
    ${mixins.centerDiv}
    gap:5px;
    cursor: pointer;
    :hover{
        background: ${colors.brand.hover};
    }
`
export const StyledUserCardPointsButtonProcessing = styled.div`
    background: ${colors.specials.illustrationBG};
    color: white;
    padding:10px 0;
    height:51px;
    border-radius: 16px;
    ${mixins.centerDiv}  
    cursor: pointer;
`
export const StyledUserCardPointsButtonIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(24, 20)}
`
export const StyledAerocard = styled.div`
    display: flex;
    position: relative;
    background: ${colors.neutrals["900"]};
    color: ${colors.neutrals["100"]};
    height: 148px;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border-radius: 8px;
    margin-bottom:10px;
    overflow: hidden;
`
export const StyledAerocardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const StyledAerocardIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(24, 20)}
`

export const StyledAerocardUsername = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l2.default,
    textStyles.mobile.texts.l2.default)}
`

export const StyledAerocardWaves = styled(AerocardWaves)`
    position:absolute;
    height: 400px;
    top:27px;
    left: 0px;
    opacity:.1;
    transform: rotate(-4.26deg);
`