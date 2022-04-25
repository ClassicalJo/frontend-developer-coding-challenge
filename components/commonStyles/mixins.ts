import { css } from 'styled-components'
import breakpoints from '../breakpoints'

const centerDiv = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
const gradientText = (gradient: string) => css`
    background: ${gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const removeGradientText = css`
    background: none;
    background-clip: initial;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
`
const fullRow = css`
    grid-column: 1 span 12;
`
const responsiveIcons = (desktopSize: number, mobileSize: number) => css`
    width: ${mobileSize}px;
    height: ${mobileSize}px;
    @media (min-width: ${breakpoints.desktop}) {
        width: ${desktopSize}px;
        height: ${desktopSize}px;
    }
`
const mixins = { centerDiv, gradientText, removeGradientText, fullRow, responsiveIcons }


export default mixins   