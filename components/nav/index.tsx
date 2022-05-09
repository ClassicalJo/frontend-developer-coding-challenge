import { StyledNavBar } from './styles'
import { UserData } from '../types'
import dynamic from 'next/dynamic'

const DynamicBalance = dynamic(() => import('./balance'), { ssr: false })
const DynamicLogo = dynamic(() => import('./Logo'), { ssr: false })
interface AppProps {
    userData: UserData;
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
}
export default function NavBar({ userData, refreshUserData, successToast, errorToast }: AppProps): JSX.Element {
    return (
        <StyledNavBar >
            <DynamicLogo />
            <DynamicBalance
                userData={userData}
                refreshUserData={refreshUserData}
                successToast={successToast}
                errorToast={errorToast}
            />
        </StyledNavBar>

    )
}