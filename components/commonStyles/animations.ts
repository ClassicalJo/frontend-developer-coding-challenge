import { css } from "styled-components"
import colors from "./colors"

export const expandUserCard = css`
    @keyframes expandUserCard {
        0% {
            height:0;
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        100% {
            height: 404px;
            opacity: 1;
        }
    }
`
export const shrinkUserCard = css`
    @keyframes shrinkUserCard {
        0% {
        height: 404px;
        opacity: 1;
        }
        70% {
            opacity: 1;
        }
        80% {
            opacity: 0;
        }
        100% {
            height: 0;   
        }
    }
`

export const appear = css`
    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const disappear = css`
    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity:0;
        }
    }
`

export const rotateDown = css`
    @keyframes rotateDown {
        0% {
            transform:scaleY(1) rotate(90deg)
        }
        100% {
            transform:scaleY(-1) rotate(90deg)
        }
    }
`

export const rotateUp = css`
    @keyframes rotateUp {
        0% {
            transform:scaleY(-1) rotate(90deg)
        }
        100% {
            transform:scaleY(1) rotate(90deg)
        }
    }
`
export const colorBackground = css`
    @keyframes colorBackground{
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
`
export const colorBackground30 = css`
    @keyframes colorBackground30{
        0% {
            opacity:.3;
        }
        100% {
            opacity:1;
        }
    }
`
const animations = { expandUserCard, shrinkUserCard, appear, disappear, colorBackground, colorBackground30 }
export default animations