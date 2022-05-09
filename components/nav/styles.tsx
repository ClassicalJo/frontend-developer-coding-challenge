import styled from 'styled-components'
import breakpoints from '../breakpoints'
import UnstyledNextImage from '../commonStyles/StyledNextImage'


export const StyledNavBar = styled.div`
    height: 128px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLink = styled.a`
    border-radius: 16px;
`

export const StyledLogo = styled(UnstyledNextImage)`
    width: 38.77px;
    height: 36px;
    @media (min-width: ${breakpoints.desktop}){
        width: 126px;
        height: 48px;
    }
`