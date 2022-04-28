import { Dispatch } from "react";
import keyDown from "../../keyDown";
import { SortMethod } from "../../types";
import { StyledSelectedButton, StyledSelectedBackground, StyledSelectedButtonText } from "./styles";

interface AppProps {
    onClick: Dispatch<SortMethod>;
    method: SortMethod;
    text: string;
    current: SortMethod;
}
export default function SelectionButton({ onClick, method, text, current }: AppProps): JSX.Element {
    return (
        <StyledSelectedButton onClick={() => onClick(method)} tabIndex={0} onKeyDown={keyDown(() => onClick(method))}>
            <StyledSelectedBackground selected={method === current}>
                <StyledSelectedButtonText selected={method === current}>
                    {text}
                </StyledSelectedButtonText>
            </StyledSelectedBackground>
        </StyledSelectedButton >
    )
}