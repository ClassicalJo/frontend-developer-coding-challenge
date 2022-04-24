import { useState, useEffect } from 'react'

export default function useShow(time: number) {
    let [show, setShow] = useState<Boolean>(false)
    let [hide, setHide] = useState<Boolean>(false)
    let [firstRender, setFirstRender] = useState<Boolean>(true)
    let timeouts: NodeJS.Timeout[] = []
    useEffect(() => {
        return timeouts.forEach(k => clearTimeout(k))
    }, [timeouts])
    let toggle = () => {
        setFirstRender(false)
        if (hide) return
        if (!show) setShow(true)
        else {
            setHide(true)
            let timeout = setTimeout(() => {
                setShow(false)
                setHide(false)
            }, time)
            timeouts.push(timeout)
        }
    }
    return { show, hide, toggle, firstRender }
}