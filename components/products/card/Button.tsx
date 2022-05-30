import { StaticImageData } from "next/image";
import { useState } from "react";
import keyDown from "../../keyDown";
import { UserData } from "../../types";
import { StyledButtonIcon, StyledProductButton, StyledProductProcessing, StyledProductUnavailable } from "./styles";

interface AppProps {
    userData: UserData;
    availableIcon: StaticImageData;
    unavailableIcon: StaticImageData;
    cost: number;
    redeem: () => Promise<void>;
}
export default function Button({ cost, userData, unavailableIcon, availableIcon, redeem }: AppProps): JSX.Element {
    let [processing, setProcessing] = useState<Boolean>(false)
    function handleOnClick(): void {
        setProcessing(true)
        redeem().finally(() => setProcessing(false))
    }
    if (processing) return (
        <StyledProductProcessing>
            Processing...
        </StyledProductProcessing>
    )
    else if (!userData || cost > userData.points) return (
        <StyledProductUnavailable>
            <p>You need</p>
            <StyledButtonIcon src={unavailableIcon} width={24} height={24} alt="" />
            <p>{cost.toLocaleString()}</p>
        </StyledProductUnavailable>
    )
    else return (
        <StyledProductButton
            role="button"
            onClick={handleOnClick}
            tabIndex={0}
            onKeyDown={keyDown(handleOnClick)}>
            <p>Redeem for</p>
            <StyledButtonIcon src={availableIcon} width={24} height={24} alt="" />
            <p>{cost.toLocaleString()}</p>
        </StyledProductButton >
    )
}