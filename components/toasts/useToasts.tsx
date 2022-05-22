import { useEffect, useState } from "react";
import { ToastElement } from "../types";

export default function useToasts() {
    let [toasts, setToasts] = useState<ToastElement[]>([])
    let [hide, setHide] = useState<Boolean>(true)
    let createToast = (isError: Boolean, item: string, message: string,): ToastElement => ({ isError, message, item })
    function addToast(isError: Boolean, item: string, message: string,) {
        setToasts([...toasts, createToast(isError, item, message)])
        setHide(false)
    }
    function customToast(isError: boolean, message: string){
        addToast(isError, "", message)
    }
    function errorToast() {
        addToast(true, "", "There was a problem with the transaction")
    }
    function successToast(item: string) {
        addToast(false, item, " was redeemed successfully",)
    }
    function handleErrorWithToast(err:unknown){
        if(err instanceof Error) customToast(true, err.message)
        else customToast(true, "There was an error during the transaction.")
    }
    useEffect(() => {
        let timeout = setTimeout(() => setHide(true), 6000)
        return () => clearTimeout(timeout)
    }, [toasts])
    return { toasts, hide, errorToast, successToast, customToast, handleErrorWithToast }
}