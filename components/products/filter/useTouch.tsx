import { useEffect, useState } from "react";

function clamp(int: number, min: number, max: number) {
    if (int < min) return min
    else if (int > max) return max
    else return int
}

export default function useTouch() {
    const [startingX, setStartingX] = useState<number>(0)
    const [offsetX, setOffsetX] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const [isClick, setIsClick] = useState<Boolean>(false)
    useEffect(() => {
        function resize() {
            setMin(Math.min(window.innerWidth - 488, 0))
            setOffsetX(0)
        }
        resize()
        window.addEventListener("resize", resize)
        return () => window.removeEventListener('resize', resize)
    }, [setMin])

    const reset = () => setStartingX(0)
    const calcDif = (int: number) => setOffsetX(clamp(offsetX + (int - startingX)* 0.2, min, 0))
    const start = (int: number) => setStartingX(int)
    const startDrag = (int: number) => {
        setIsClick(true)
        setStartingX(int)
    }
    const drag = (int: number) => isClick && calcDif(int)
    const endDrag = () => {
        setIsClick(false)
        setStartingX(0)
    }
    const goToMin = () => setOffsetX(min)
    return { reset, calcDif, start, offsetX, isClick, startDrag, endDrag, drag, goToMin }
}