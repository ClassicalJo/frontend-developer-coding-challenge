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
    StyledUserCardTitle
} from "./styles"
import aeropay from '../../../assets/icons/aeropay-3.svg'
import Aerocard from "./Aerocard";
import fetchPoints from "../../fetchPoints";
import UserCardPointsButton from "./UserCardPointsButton";
import keyDown from "../../keyDown";

interface AppProps {
    hide: Boolean;
    userData: UserData;
    refreshUserData: () => void;
}
export default function UserCard({ hide, userData, refreshUserData }: AppProps): JSX.Element {
    let [currentCharge, setCurrentCharge] = useState<ValidCharge>(1000)
    let [loading, setLoading] = useState<Boolean>(false)
    let selectValues: ValidCharge[] = [1000, 5000, 7500]

    function chargePoints() {
        setLoading(true)
        fetchPoints(currentCharge)
            .then(() => refreshUserData())
            .catch(err => console.log("This is where the error label should trigger", err))
            .finally(() => setLoading(false))
    }
    return (
        <StyledUserCardContainer hide={hide} onClick={(e: SyntheticEvent) => e.stopPropagation()}>
            <StyledUserCardTitle>Add Balance</StyledUserCardTitle>
            <StyledUserCardSection>
                <Aerocard userData={userData} />
                <StyledUserCardPointsWrapper >
                    {selectValues.map((k, i) => (
                        <StyledUserCardPointsSelectWrapper
                            key={`userCardSelectPoints${i}`}
                            tabIndex={0}
                            current={currentCharge === k}
                            onClick={() => setCurrentCharge(k)} onKeyDown={keyDown(() => setCurrentCharge(k))}>
                            <StyledUserCardPointsSelect current={currentCharge === k}>
                                <p>{k}</p>
                            </StyledUserCardPointsSelect>
                        </StyledUserCardPointsSelectWrapper>
                    ))}
                </StyledUserCardPointsWrapper>
                <UserCardPointsButton loading={loading} chargePoints={chargePoints} />
            </StyledUserCardSection>
        </StyledUserCardContainer>
    )
}