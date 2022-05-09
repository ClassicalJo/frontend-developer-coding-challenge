import Image from 'next/image'
import aeropay1 from '../../../assets/icons/aeropay-1.svg'
import chevronDefault from '../../../assets/icons/chevron-default.svg'
import keyDown from '../../keyDown';
import { EffectUserData } from '../../types';
import useShow from '../../useShow';
import {
    StyledBalance,
    StyledBalanceLogo,
    StyledBalancePoints,
    StyledBalanceWrapper,
    StyledChevron,

} from "./styles";
import UserCard from './UserCard';

interface AppProps {
    userData: EffectUserData;
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
}
export default function Balance({ userData, refreshUserData, successToast, errorToast }: AppProps): JSX.Element {
    let { show, hide, toggle, firstRender } = useShow(500)
    if (!userData) return (
        <StyledBalanceWrapper>
            <StyledBalance>
                <StyledBalancePoints>
                    ...
                </StyledBalancePoints>
            </StyledBalance>
        </StyledBalanceWrapper>
    )
    return (
        <StyledBalanceWrapper >
            <StyledBalance onClick={toggle} tabIndex={0} onKeyDown={keyDown(toggle)}>
                {show && <UserCard
                    hide={hide}
                    successToast={successToast}
                    errorToast={errorToast}
                    refreshUserData={refreshUserData}
                    userData={userData}
                />}
                <StyledBalanceLogo>
                    <Image src={aeropay1} width={32} height={32} alt={"Aeropay logo, a flying kite"} />
                </StyledBalanceLogo>
                <StyledBalancePoints>
                    {userData.points.toLocaleString()}
                </StyledBalancePoints>
                <StyledChevron
                    width={20}
                    height={20}
                    src={chevronDefault}
                    firstRender={firstRender}
                    shouldRotate={(show && !hide)}
                    alt={(show && !hide) ? "Arrow up to expand" : "Arrow down to hide"}
                />
            </StyledBalance>
        </StyledBalanceWrapper>
    )
}