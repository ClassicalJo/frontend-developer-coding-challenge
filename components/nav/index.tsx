import Logo from './Logo'
import { StyledNavBar } from './styles'
import { EffectUserData } from '../types'
import Balance from './balance'

interface AppProps {
    userData: EffectUserData;
    refreshUserData: () => void;
    addToast: (isError: Boolean, message: string) => void;
}
export default function NavBar({ userData, refreshUserData, addToast }: AppProps): JSX.Element {
    return (
        <StyledNavBar >
            <Logo />
            <Balance userData={userData} refreshUserData={refreshUserData} addToast={addToast} />
        </StyledNavBar>

    )
}