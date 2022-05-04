import heroDesktop from '../../assets/illustrations/hero-desktop.png'
import downIcon from '../../assets/icons/Icons.svg'
import {
    StyledColumns,
    StyledExplore,
    StyledIconWrapper,
    StyledPicture,
    StyledPictureWrapper,
    StyledProductButton,
    StyledProductButtonText,
    StyledProductButtonWrapper,
    StyledSubtitle,
    StyledTech,
    StyledTextArea,
    StyledWaves,
    StyledWavesOverflow,
    StyledWavesWrapper,
    StyledZone
} from "./styles";
import Image from 'next/image'
import keyDown from '../keyDown';

interface AppProps {
    onClick: () => void;
}
export default function Hero({ onClick }: AppProps): JSX.Element {
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
                <StyledProductButton
                    tabIndex={0}
                    onClick={onClick}
                    onKeyDown={keyDown(onClick)}>
                    <StyledProductButtonWrapper >
                        <StyledProductButtonText>
                            VIEW ALL PRODUCTS
                        </StyledProductButtonText>
                        <StyledIconWrapper width={28} height={28} src={downIcon} />
                    </StyledProductButtonWrapper>
                </StyledProductButton>
            </StyledTextArea>
            <StyledPicture >
                <StyledPictureWrapper
                    src={heroDesktop}
                    width={1080}
                    height={1080}
                    objectFit='cover'
                />
            </StyledPicture>
        </StyledColumns>
    )
}