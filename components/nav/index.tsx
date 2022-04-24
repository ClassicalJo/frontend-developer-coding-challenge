import Logo from './Logo'
import { StyledNavBar } from './styles'
import { EffectUserData } from '../types'
import Balance from './balance'

interface AppProps {
    userData: EffectUserData;
    refreshUserData: () => void;
}
export default function NavBar({ userData, refreshUserData }: AppProps): JSX.Element {
    return (
        <StyledNavBar >
            <Logo />
            <Balance userData={userData} refreshUserData={refreshUserData} />
        </StyledNavBar>

    )
}