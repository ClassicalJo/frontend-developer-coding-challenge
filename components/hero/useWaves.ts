import { useEffect, useState } from "react"

export default function useWaves() {
    let [totalArea, setTotalArea] = useState<number>(1400)
    useEffect(() => {
        function resize() {
            if (window.innerWidth >= 1920) setTotalArea(1400)
            else if (window.innerWidth >= 1024) setTotalArea(1050)
            else setTotalArea(950)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])
    return totalArea
}