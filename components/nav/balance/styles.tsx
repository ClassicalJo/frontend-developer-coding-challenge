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
`
export const StyledBalancePoints = styled.div`
    ${textStyles.mobile.texts.l1.default}
    ${mixins.centerDiv}
    ${mixins.gradientText(colors.brand.default)}
    pointer-events: none;

    @media (min-width: ${breakpoints.tablet}){
        ${textStyles.desktop.texts.l1.default}
    }
`
export const StyledBalanceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`

export const StyledBalanceLogo = styled.div`
    ${mixins.centerDiv}
    margin:8px;
    margin-left: 16px;
    width:24px;
    height:24px;

    @media (min-width: ${breakpoints.tablet}){
        width: 32px;
        height: 32px;
    }
`

interface ChevronProps {
    rotate: Boolean;
    firstRender: Boolean;
}
export const StyledChevron = styled(UnstyledNextImage) <ChevronProps>`
    margin:12px 16px;
    ${props => `
        width: ${props.width}px;
        height: ${props.height}px;
    `}
    ${props => {
        if (props.firstRender) return `
            transform: rotate(90deg);
        `
        else if (props.rotate) return `
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
    width:100vw;
    height:400px;
    max-width: 312px;
    max-height: 400px;
    background: white;
    z-index: 2;
    right:-1px;    
    top:55px;
    overflow: hidden;
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
    ${textStyles.desktop.texts.l1.default}
    padding: 20px;
    border-bottom: 1px solid ${colors.neutrals["300"]};   
`

export const StyledUserCardSection = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 4px 0;
    border-radius: 12px;
    ${props => {
        if (props.current) return `
        background: ${colors.brand.default}    
        `
        return `
        background: ${colors.neutrals["200"]};
        `
    }}
       
`
export const StyledUserCardPointsSelect = styled.div<UserCardSelectPointsProps>`
    ${textStyles.desktop.texts.l1.default}
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
    ${textStyles.desktop.texts.l1.default}
    ${mixins.centerDiv}
    gap:5px;
    cursor: pointer;
`
export const StyledUserCardPointsButtonProcessing = styled.div`
    background: ${colors.specials.illustrationBG};
    color: white;
    padding:10px 0;
    border-radius: 16px;
    ${textStyles.desktop.texts.l1.default}
    ${mixins.centerDiv}
    
    cursor: pointer;
`
export const StyledUserCardPointsButtonIcon = styled(UnstyledNextImage)`
    height:24px;
    width: 24px;
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
    ${textStyles.mobile.texts.l1.default}
    @media (min-width: ${breakpoints.tablet}) {
        ${textStyles.desktop.texts.l1.default}    
    }
`
export const StyledAerocardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const StyledAerocardIcon = styled(UnstyledNextImage)`
    width: 20px;
    height: 20px;

    @media (min-width: ${breakpoints.tablet}) {
        width:  24px;
        height: 24px;    
    }
`
export const StyledAerocardUsername = styled.p`
    ${textStyles.mobile.texts.l2.default}
    @media (min-width: ${breakpoints.tablet}) {
        ${textStyles.desktop.texts.l2.default}    
    }
`

export const StyledAerocardWaves = styled(AerocardWaves)`
    position:absolute;
    height: 400px;
    top:27px;
    left: 0px;
    opacity:.1;
    transform: rotate(-4.26deg);
`