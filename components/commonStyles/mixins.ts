import { css } from 'styled-components'

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
const fullRow = css`
    grid-column: 1 span 12;
`
const mixins = { centerDiv, gradientText, fullRow }
export default mixins   