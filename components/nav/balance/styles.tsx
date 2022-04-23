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
    display: flex;
    border-radius:16px;
    padding: 6px;
    position:relative;
    
`
export const StyledBalancePoints = styled.div`
    ${textStyles.mobile.texts.l1.default}
    ${mixins.centerDiv}
    ${mixins.gradientText(colors.brand.default)}

    @media (min-width: ${breakpoints.desktop}){
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
    margin:0 15px;
    width:24px;
    height:24px;

    @media (min-width: ${breakpoints.desktop}){
        width: 32px;
        height: 32px;
    }
`

export const rotatedLogo = (deg: number) => styled.div`
    transform: rotate(${deg}deg);
`
export const StyledChevronDown = rotatedLogo(90)
export const StyledChevronUp = rotatedLogo(270)

export const StyledUserCardContainer = styled.div<UserCardProps>`
    position: absolute;
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
    gap: 3px;
`
export const StyledUserCardPointsSelectWrapper = styled.div<UserCardSelectPointsProps>`
    ${mixins.centerDiv}

    flex:1;
    padding: 5px 0;
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
    }
    }
`
export const StyledUserCardPointsButton = styled.div`
    background: ${colors.brand.default};
    color: white;
    padding:10px 0;
    border-radius: 16px;
    ${textStyles.desktop.texts.l1.default}
    ${mixins.centerDiv}
    gap:5px;
    
`
export const StyledUserCardPointsButtonIcon = styled(UnstyledNextImage)`
    height:24px;
    width: 24px;
`
export const StyledAerocard = styled.div`
    display: flex;
    position: relative;
    background: ${colors.neutrals["900"]};
    height: 148px;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 20px 15px;
    border-radius: 8px;
    margin-bottom:10px;
    overflow: hidden;
`
export const StyledAerocardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.neutrals["100"]};
    ${textStyles.desktop.texts.l1.default}
`
export const StyledAerocardTitle = styled.div`
    ${textStyles.desktop.texts.l1.default}  
`
export const StyledAerocardIcon = styled(UnstyledNextImage)`
    width:24px;
    height: 24px;
`
export const StyledAerocardUsername = styled.p`
    ${textStyles.desktop.texts.l2.default}
`
export const StyledAerocardDate = styled.p`
    ${textStyles.desktop.texts.l1.default}
`

export const StyledAerocardWaves = styled(AerocardWaves)`
    position:absolute;
    height: 400px;
    top:27px;
    left: 0px;
    opacity:.1;
    transform: rotate(-4.26deg);

`