import { useState, useEffect, useMemo, useRef } from 'react'

export default function useShow(time: number) {
    let [show, setShow] = useState<Boolean>(false)
    let [hide, setHide] = useState<Boolean>(false)
    let [firstRender, setFirstRender] = useState<Boolean>(true)
    let timeoutsRef = useRef<NodeJS.Timeout[]>([])
    useEffect(() => {
        let timeouts = timeoutsRef.current
        return () => timeouts.forEach(k => clearTimeout(k))
    }, [])
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
            timeoutsRef.current.push(timeout)
        }
    }
    return { show, hide, toggle, firstRender }
}