import { useState } from "react"
import { ToastElement } from "../types";
import ErrorToast from "./ErrorToast";
import Toast from "./Toast";
interface AppProps {
    toasts: ToastElement[];
}
export default function Toasts({ toasts }: AppProps): JSX.Element {

    return (
        <div className="container">
            {toasts.map((k, i) => {
                switch (k.isError) {
                    case true: return <Toast item={k.message} />
                    default: return <ErrorToast message={k.message} />
                }
            })}
        </div>
    )

}