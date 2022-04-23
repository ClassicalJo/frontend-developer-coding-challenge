import { UserData } from "../../types";
import { StyledAerocard, StyledAerocardDate, StyledAerocardIcon, StyledAerocardTitle, StyledAerocardTitleContainer, StyledAerocardUsername, StyledAerocardWaves } from "./styles";
import aeropay from '../../../assets/icons/aeropay-2.svg'

interface AppProps {
    userData: UserData

}
export default function Aerocard({ userData }: AppProps): JSX.Element {
    let date = new Date(userData.createDate)
    return (
        <StyledAerocard>
            <StyledAerocardWaves/>
            <StyledAerocardTitleContainer>
                <StyledAerocardTitle>Aerocard</StyledAerocardTitle>
                <StyledAerocardIcon width={24} height={24} src={aeropay} />
            </StyledAerocardTitleContainer>
            <StyledAerocardTitleContainer>
                <StyledAerocardUsername>{userData.name}</StyledAerocardUsername>
                <StyledAerocardDate>{date.getMonth()}/{date.getFullYear().toLocaleString().slice(0,2)}</StyledAerocardDate>
            </StyledAerocardTitleContainer>
        </StyledAerocard>
    )
}