import { StaticImageData } from "next/image";
import { useState } from "react";
import keyDown from "../keyDown";
import { ToastElement } from "../types";
import { StyledIcon, StyledIconCross, StyledIconAndText, StyledText, StyledTextArea, StyledToast } from "./styles";

interface AppProps {
    className?: string;
    toast: ToastElement;
    first: Boolean;
    icon: StaticImageData;
    crossActive: StaticImageData;
    crossDefault: StaticImageData;
    show: Boolean;
}
export default function Toast({ toast, icon, first, crossActive, show, crossDefault }: AppProps): JSX.Element {
    let [shouldDisplay, setShouldDisplay] = useState<Boolean>(true)
    return (
        <StyledToast first={first} show={show && shouldDisplay} error={toast.isError}>
            <StyledIconAndText>
                <StyledIcon
                    src={icon}
                    width={32}
                    height={32}
                    priority={true}
                />
                <StyledTextArea>
                    <p><StyledText>{toast.item}</StyledText>{toast.message}</p>
                </StyledTextArea>
                <StyledIconCross
                    tabIndex={0}
                    src={'/cross-default.svg'}
                    width={23}
                    height={23}
                    priority={true}
                    onClick={() => setShouldDisplay(false)}
                    onKeyDown={keyDown(() => setShouldDisplay(false))}
                />
            </StyledIconAndText>
        </StyledToast>
    )
}