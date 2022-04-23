import { SyntheticEvent, useState } from "react"
import { UserData, ValidCharge } from "../../types";
import { 
    StyledUserCardContainer, 
    StyledUserCardPointsButton, 
    StyledUserCardPointsButtonIcon, 
    StyledUserCardPointsWrapper, 
    StyledUserCardSection, 
    StyledUserCardPointsSelectWrapper, 
    StyledUserCardPointsSelect, 
    StyledUserCardTitle } from "./styles"
import aeropay from '../../../assets/icons/aeropay-3.svg'
import Aerocard from "./Aerocard";

interface AppProps {
    hide: Boolean;
    userData: UserData;
}
export default function UserCard({ hide, userData }: AppProps): JSX.Element {
    let [currentValue, setCurrentValue] = useState<ValidCharge>(1000)
    let selectValues: ValidCharge[] = [1000, 5000, 7500]
    return (
        <StyledUserCardContainer hide={hide}>
            <StyledUserCardTitle>Add Balance</StyledUserCardTitle>
            <StyledUserCardSection>
                <Aerocard userData={userData}/>
                <StyledUserCardPointsWrapper onClick={(e:SyntheticEvent) => e.stopPropagation()}>
                    {selectValues.map((k, i) => (
                        <StyledUserCardPointsSelectWrapper
                            current={currentValue === k}>
                            <StyledUserCardPointsSelect
                                key={`userCardSelectPoints${i}`}
                                current={currentValue === k}
                                onClick={() => setCurrentValue(k)}
                            >
                                <p>{k}</p>
                            </StyledUserCardPointsSelect>
                        </StyledUserCardPointsSelectWrapper>
                    ))}
                </StyledUserCardPointsWrapper>
                <StyledUserCardPointsButton>
                    <StyledUserCardPointsButtonIcon src={aeropay} />
                    <p>Add Points</p>
                </StyledUserCardPointsButton>
            </StyledUserCardSection>
        </StyledUserCardContainer>
    )
}