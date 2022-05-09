import Logo from './Logo'
import { StyledNavBar } from './styles'
import { UserData } from '../types'
import Balance from './balance'

interface AppProps {
    userData: UserData;
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
}
export default function NavBar({ userData, refreshUserData, successToast, errorToast }: AppProps): JSX.Element {
    return (
        <StyledNavBar >
            <Logo />
            <Balance
                userData={userData}
                refreshUserData={refreshUserData}
                successToast={successToast}
                errorToast={errorToast}
            />
        </StyledNavBar>

    )
}