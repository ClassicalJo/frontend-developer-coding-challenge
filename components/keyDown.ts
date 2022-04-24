import React from "react"
const keyDown = (fn: Function) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
        e.stopPropagation()
        fn()
    }
}
export default keyDown