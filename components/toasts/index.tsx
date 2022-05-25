import React from 'react';
import crossActive from '../../assets/icons/cross-active.svg';
import crossDefault from '../../assets/icons/cross-default.svg';
import successIcon from '../../assets/icons/system-success.svg';
import { ToastElement } from "../types";
import { StyledToastsContainer } from "./styles";
import Toast from './Toast';

interface AppProps {
    toasts: ToastElement[];
    hide: Boolean;
}
export default function Toasts({ toasts, hide, }: AppProps): JSX.Element {
    return (
        <StyledToastsContainer hide={hide} >
            {toasts.map((k, i) => (
                <Toast
                    key={`toast${i}`}
                    toast={k}
                    icon={k.isError ? "/system-error.svg" : successIcon}
                    crossActive={crossActive}
                    crossDefault={crossDefault}
                    first={i === toasts.length - 1}
                    show={i >= toasts.length - 3}
                />
            ))}
        </StyledToastsContainer>
    )
}

