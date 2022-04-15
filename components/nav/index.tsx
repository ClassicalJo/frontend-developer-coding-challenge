import Logo from './Logo'
import Image from 'next/image'
import aeropay1 from '../../assets/icons/aeropay-1.svg'
import chevronDefault from '../../assets/icons/chevron-default.svg'
import { StyledBalance, StyledNavBar, StyledBalanceWrapper, StyledBalanceLogo, StyledChevronDown, StyledBalancePoints } from './styles'
export default function NavBar(): JSX.Element {
    return (
        <StyledNavBar>
            <Logo />
            <StyledBalanceWrapper>
                <StyledBalance>
                    <StyledBalanceLogo>
                        <Image src={aeropay1} width={32} height={32} />
                    </StyledBalanceLogo>
                    <StyledBalancePoints points={100000} />
                    <StyledBalanceLogo>
                        <StyledChevronDown>
                            <Image src={chevronDefault} width={32} height={32} />
                        </StyledChevronDown>
                    </StyledBalanceLogo>
                </StyledBalance>
            </StyledBalanceWrapper>
        </StyledNavBar>

    )
}