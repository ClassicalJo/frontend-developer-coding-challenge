import Logo from './Logo'
import { StyledNavBar } from './styles'
import { EffectUserData } from '../types'
import Balance from './balance'

interface AppProps {
    userData: EffectUserData
}
export default function NavBar({ userData }: AppProps): JSX.Element {
    return (
        <StyledNavBar>
            <Logo />
            <Balance userData={userData} />
        </StyledNavBar>

    )
}