import { useEffect, useState } from 'react'
import Image from 'next/image'
import aerolabLogo1 from '../../assets/icons/aerolab-logo-1.svg'
import aerolabLogo2 from '../../assets/icons/aerolab-logo-2.svg'
import { StyledLink } from './styles'

export default function Logo(): JSX.Element {
    let isDesktop = (): Boolean => window.innerWidth >= 1920
    let [showDesktopLogo, setShowDesktopLogo] = useState<Boolean>(true)
    useEffect(() => {
        let resizeLogo = () => setShowDesktopLogo(isDesktop())
        window.addEventListener('resize', resizeLogo)
        resizeLogo()
        return () => window.removeEventListener('resize', resizeLogo)
    }, [])
    switch (showDesktopLogo) {
        case true: return (
            <StyledLink href="https://aerolab.us/">
                <Image src={aerolabLogo1} alt="Aerolab logo, a flying kite" />
            </StyledLink>
        )
        default: return (
            <StyledLink href="https://aerolab.us/">
                <Image src={aerolabLogo2} alt="Aerolab logo, a flying kite"/>
            </StyledLink>
        )
    }
}