import { StaticImageData } from "next/image";
import { useState } from "react";
import { EffectUserData } from "../../types";
import { StyledButtonIcon, StyledButtonText, StyledProductButton, StyledProductProcessing, StyledProductUnavailable } from "./styles";

interface AppProps {
    userData: EffectUserData;
    availableIcon: StaticImageData;
    unavailableIcon: StaticImageData;
    cost: number;
    redeem: () => Promise<void>;
}
export default function Button({ cost, userData, unavailableIcon, availableIcon, redeem }: AppProps): JSX.Element {
    let [processing, setProcessing] = useState<Boolean>(false)
    function onClick(): void {
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
            <StyledButtonText>
                You need
            </StyledButtonText>
            <StyledButtonIcon src={unavailableIcon} width={24} height={24} />
            <StyledButtonText>
                {cost.toLocaleString()}
            </StyledButtonText>
        </StyledProductUnavailable>
    )
    else return (
        <StyledProductButton onClick={onClick}>
            <StyledButtonText>
                Redeem for
            </StyledButtonText>
            <StyledButtonIcon src={availableIcon} width={24} height={24} />
            <StyledButtonText>
                {cost.toLocaleString()}
            </StyledButtonText>
        </StyledProductButton>
    )
}