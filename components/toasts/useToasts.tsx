import { useEffect, useState } from "react";
import { ToastElement } from "../types";

export default function useToasts() {
    let [toasts, setToasts] = useState<ToastElement[]>([])
    let createToast = (isError: Boolean, message: string): ToastElement => ({ isError, message })
    let addToast = (isError: Boolean, message: string) => setToasts([...toasts, createToast(isError, message)])
    return { toasts, addToast }
}