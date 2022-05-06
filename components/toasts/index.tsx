import React, { useEffect } from 'react'
import { ToastElement } from "../types";
import { StyledErrorToast, StyledToast, StyledToastsContainer } from "./styles";
import errorIcon from '../../assets/icons/system-error.svg'
import successIcon from '../../assets/icons/system-success.svg'
import crossActive from '../../assets/icons/cross-active.svg'
import crossDefault from '../../assets/icons/cross-default.svg'
interface AppProps {
    toasts: ToastElement[];
}

export default function Toasts({ toasts }: AppProps): JSX.Element {
    return (
        <StyledToastsContainer>
            {toasts.map((k, i) => {
                switch (k.isError) {
                    case false: return (
                        <StyledToast
                            key={`toast${i}`}
                            item={k.message}
                            icon={successIcon}
                            crossActive={crossActive}
                            crossDefault={crossDefault}
                            isFirst={i === toasts.length - 1}
                            display={i >= toasts.length - 3}
                        />)
                    default: return (
                        <StyledErrorToast
                            key={`errorToast${i}`}
                            message={k.message}
                            icon={errorIcon}
                            crossActive={crossActive}
                            crossDefault={crossDefault}
                            isFirst={i === toasts.length - 1}
                            display={i >= toasts.length - 3}
                        />)
                }
            })}
        </StyledToastsContainer>
    )
}

