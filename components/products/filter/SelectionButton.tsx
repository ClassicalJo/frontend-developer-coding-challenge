import { Dispatch } from "react";
import keyDown from "../../keyDown";
import { SortMethod } from "../../types";
import { StyledSelectedButton, StyledSelectedBackground, StyledSelectedButtonText } from "./styles";

interface AppProps {
    onClick: Dispatch<SortMethod>;
    onFocus?: () => void;
    method: SortMethod;
    text: string;
    current: SortMethod;
}
export default function SelectionButton({ onClick, onFocus, method, text, current }: AppProps): JSX.Element {
    return (
        <StyledSelectedButton
            onClick={() => onClick(method)}
            tabIndex={0}
            onKeyDown={keyDown(() => onClick(method))}
            onFocus={onFocus}
        >
            <StyledSelectedBackground selected={method === current}>
                <StyledSelectedButtonText selected={method === current}>
                    {text}
                </StyledSelectedButtonText>
            </StyledSelectedBackground>
        </StyledSelectedButton >
    )
}