import { css } from "styled-components"

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
export default { expandUserCard, shrinkUserCard, appear, disappear }