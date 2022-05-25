import { StyledLink, StyledLogo } from './styles'
import useLogo from './useLogo'
export default function Logo(): JSX.Element {
    let src = useLogo()
    return (
        <StyledLink href="https://aerolab.us/" role='button' title="Link to Aerolab's homepage">
            <StyledLogo
                width={src.width}
                height={src.height}
                src={src}
                alt="Aerolab logo, a flying kite" />
        </StyledLink>
    )
}