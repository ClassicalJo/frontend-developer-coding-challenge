import ViewAllProducts from "./ViewAllProducts";
import heroDesktop from '../../assets/illustrations/hero-desktop.png'

import { StyledExplore, StyledPicture, StyledSubtitle, StyledTech, StyledZone } from "./styles";
import Image from 'next/image'

export default function Hero(): JSX.Element {
    return (
        <div>
            <div>
                <StyledExplore />
                <StyledTech />
                <StyledZone />
                <StyledSubtitle />
                <ViewAllProducts />
            </div>
            <StyledPicture >
                <Image src={heroDesktop} width={1080} height={1080} />
            </StyledPicture>
        </div>
    )
}