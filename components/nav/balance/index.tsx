import Image from 'next/image'
import { useEffect, useState } from 'react';
import aeropay1 from '../../../assets/icons/aeropay-1.svg'
import chevronDefault from '../../../assets/icons/chevron-default.svg'
import { EffectUserData } from '../../types';
import useShow from '../../useShow';
import {
    StyledBalance,
    StyledBalanceLogo,
    StyledBalancePoints,
    StyledBalanceWrapper,
    StyledChevronDown
} from "./styles";
import UserCard from './UserCard';

interface AppProps {
    userData: EffectUserData
}
export default function Balance({ userData }: AppProps): JSX.Element {
    let { show, hide, toggle } = useShow()
    if(!userData) return <div>Loading...</div>
    return (
        <StyledBalanceWrapper >
            <StyledBalance onClick={toggle}>
                {show && <UserCard hide={hide} userData={userData} />}
                <StyledBalanceLogo>
                    <Image src={aeropay1} width={32} height={32} />
                </StyledBalanceLogo>
                <StyledBalancePoints>
                    {userData.points.toLocaleString()}
                </StyledBalancePoints>
                <StyledBalanceLogo>
                    <StyledChevronDown>
                        <Image src={chevronDefault} width={32} height={32} />
                    </StyledChevronDown>
                </StyledBalanceLogo>
            </StyledBalance>
        </StyledBalanceWrapper>
    )
}