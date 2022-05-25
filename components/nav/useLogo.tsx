import { StaticImageData } from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import aerolabLogo1 from '../../assets/icons/aerolab-logo-1.svg'
import aerolabLogo2 from '../../assets/icons/aerolab-logo-2.svg'

export default function useLogo() {
    let isDesktop = useCallback(() => window.innerWidth >= 1920, [])
    let [src, setSrc] = useState<StaticImageData>(isDesktop() ? aerolabLogo1 : aerolabLogo2)
    useEffect(() => {
        function resize() {
            if (isDesktop() && src !== aerolabLogo1) setSrc(aerolabLogo1)
            else if (!isDesktop() && src !== aerolabLogo2) setSrc(aerolabLogo2)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [isDesktop, src])
    return src
}