import { Dispatch } from "react";
import { SortMethod } from "../../types";
import { StyledSelectedButton, StyledSelectedBackground, StyledSelectedButtonText, StyledUnselectedButton, StyledUnselectedBackground, StyledUnselectedButtonText } from "./styles";

interface AppProps {
    className?: string;
    onClick: Dispatch<SortMethod>;
    method: SortMethod;
    text: string;
    current: SortMethod;
}
export default function SelectionButton({ className, onClick, method, text, current }: AppProps): JSX.Element {
    switch (current === method) {
        case true: return (
            <StyledSelectedButton >
                <StyledSelectedBackground>
                    <StyledSelectedButtonText>
                        {text}
                    </StyledSelectedButtonText>
                </StyledSelectedBackground>
            </StyledSelectedButton>
        )
        default: return (
            <StyledUnselectedButton onClick={() => onClick(method)} tabIndex={0}>
                <StyledUnselectedBackground>
                    <StyledUnselectedButtonText>
                        {text}
                    </StyledUnselectedButtonText>
                </StyledUnselectedBackground>
            </StyledUnselectedButton>
        )
    }

}