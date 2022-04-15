import styled from 'styled-components'
import breakpoints from '../breakpoints'
import colors from '../commonStyles/colors'
import mixins from '../commonStyles/mixins'
import textStyles from '../commonStyles/text'
import Balance from './Balance'

export const StyledNavBar = styled.div`
    height: 120px;
    display:flex;
    justify-content: space-between;
`
export const StyledBalance = styled.div`
    box-shadow: 0px 0px 20px ${colors.neutrals["200"]};
    border:1px solid ${colors.neutrals["200"]};
    display: flex;
    border-radius:10px;
    padding: .5em;
`
export const StyledBalancePoints = styled(Balance)`
    ${textStyles.mobile.texts.l1.default}
    ${mixins.centerDiv}
    background: ${colors.brand.default};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

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