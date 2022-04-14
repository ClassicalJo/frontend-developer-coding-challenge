import ViewAllProducts from "./ViewAllProducts";
import heroDesktop from '../../assets/illustrations/hero-desktop.png'
import icon from '../../assets/icons/Icons.svg'
import { StyledColumns, StyledExplore, StyledIconWrapper, StyledPicture, StyledProductButton, StyledProductButtonText, StyledProductButtonWrapper, StyledSubtitle, StyledTech, StyledTextArea, StyledZone } from "./styles";
import Image from 'next/image'

export default function Hero(): JSX.Element {
    return (
        <StyledColumns>
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
                        <Image width={32} height={32} src={icon} />
                    </StyledProductButtonWrapper>
                </StyledProductButton>
            </StyledTextArea>
            <StyledPicture >
                <Image src={heroDesktop} width={1080} height={1080} />
            </StyledPicture>
        </StyledColumns>
    )
}