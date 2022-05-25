import aeropay from '../../../assets/icons/aeropay-3.svg';
import keyDown from "../../keyDown";
import {
    StyledUserCardPointsButton,
    StyledUserCardPointsButtonIcon,
    StyledUserCardPointsButtonProcessing
} from "./styles";


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
        <StyledUserCardPointsButton
            role="button"
            tabIndex={0}
            onClick={chargePoints}
            onKeyDown={keyDown(chargePoints)}>
            <StyledUserCardPointsButtonIcon
                width={aeropay.width}
                height={aeropay.height}
                src={aeropay} alt="" />
            <p>Add Points</p>
        </StyledUserCardPointsButton>
    )
}