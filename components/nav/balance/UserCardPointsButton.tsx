import {
    StyledUserCardPointsButton,
    StyledUserCardPointsButtonIcon,
    StyledUserCardPointsButtonProcessing,
} from "./styles"
import aeropay from '../../../assets/icons/aeropay-3.svg'
import { SyntheticEvent } from "react";
import keyDown from "../../keyDown";


interface AppProps {
    loading: Boolean;
    chargePoints: () => void;

}
export default function UserCardPointsButton({ loading, chargePoints }: AppProps): JSX.Element {
    if (loading) return (
        <StyledUserCardPointsButtonProcessing>
            <p>Processing...</p>
        </StyledUserCardPointsButtonProcessing>
    )
    return (
        <StyledUserCardPointsButton tabIndex={0} onClick={chargePoints} onKeyDown={keyDown(chargePoints)}>
            <StyledUserCardPointsButtonIcon
                width={aeropay.width}
                height={aeropay.height}
                src={aeropay} alt="Aeropay logo, a flying kite" />
            <p>Add Points</p>
        </StyledUserCardPointsButton>
    )
}