import React, { SyntheticEvent, useState } from "react";
import fetchPoints from "../../fetchPoints";
import keyDown from "../../keyDown";
import { UserData, ValidCharge } from "../../types";
import Aerocard from "./Aerocard";
import {
    StyledUserCardContainer, StyledUserCardPointsSelect, StyledUserCardPointsSelectWrapper, StyledUserCardPointsWrapper,
    StyledUserCardSection, StyledUserCardTitle
} from "./styles";
import UserCardPointsButton from "./UserCardPointsButton";

interface AppProps {
    hide: Boolean;
    userData: UserData;
    refreshUserData: () => void;
    successToast: (item: string) => void;
    errorToast: () => void;
}
export default function UserCard({ hide, userData, refreshUserData, successToast, errorToast }: AppProps): JSX.Element {
    let [currentCharge, setCurrentCharge] = useState<ValidCharge>(1000)
    let [loading, setLoading] = useState<Boolean>(false)
    let selectValues: ValidCharge[] = [1000, 5000, 7500]
    function generateHandleClick(k: ValidCharge) {
        return function (e: React.MouseEvent) {
            e.stopPropagation()
            setCurrentCharge(k)
        }
    }
    function generateHandleKeyDown(k: ValidCharge) {
        return function (e: React.KeyboardEvent) {
            e.stopPropagation()
            setCurrentCharge(k)
        }
    }
    function successfulCharge(charge: number) {
        refreshUserData()
        successToast(charge + " Aeropoints package")
    }
    function chargePoints() {
        let charge = currentCharge
        setLoading(true)
        fetchPoints(charge)
            .then(() => successfulCharge(charge))
            .catch(() => errorToast())
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
                            role='button'
                            onClick={generateHandleClick(k)}
                            onKeyDown={keyDown(generateHandleKeyDown(k))}>
                            <StyledUserCardPointsSelect current={currentCharge === k}>
                                <p>{k}</p>
                            </StyledUserCardPointsSelect>
                        </StyledUserCardPointsSelectWrapper>
                    ))}
                </StyledUserCardPointsWrapper>
                <UserCardPointsButton loading={loading} chargePoints={chargePoints} />
            </StyledUserCardSection>
        </StyledUserCardContainer >
    )
}