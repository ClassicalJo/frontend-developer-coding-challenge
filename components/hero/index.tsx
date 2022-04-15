import ViewAllProducts from "./ViewAllProducts";
import heroDesktop from '../../assets/illustrations/hero-desktop.png'
import icon from '../../assets/icons/Icons.svg'
import { StyledColumns, StyledExplore, StyledIconWrapper, StyledPicture, StyledPictureWrapper, StyledProductButton, StyledProductButtonText, StyledProductButtonWrapper, StyledSubtitle, StyledTech, StyledTextArea, StyledWaves, StyledWavesOverflow, StyledWavesWrapper, StyledZone } from "./styles";
import Image from 'next/image'
import Waves from "./Waves";

export default function Hero(): JSX.Element {
    return (
        <StyledColumns>
            <StyledWavesWrapper>
                <StyledWavesOverflow>
                    <StyledWaves />
                </StyledWavesOverflow>
            </StyledWavesWrapper>
            <StyledTextArea>
                <StyledExplore />
                <StyledTech />
                <StyledZone />
                <StyledSubtitle />
                <StyledProductButton>
                    <StyledProductButtonWrapper >
                        <StyledProductButtonText>
                            VIEW ALL PRODUCTS
                        </StyledProductButtonText>
                        <Image width={24} height={24} src={icon} />
                    </StyledProductButtonWrapper>
                </StyledProductButton>
            </StyledTextArea>
            <StyledPicture >
                <StyledPictureWrapper>
                    <Image src={heroDesktop} width={1080} height={1080} objectFit='cover' />
                </StyledPictureWrapper>
            </StyledPicture>

        </StyledColumns>
    )
}