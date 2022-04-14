import { css } from "styled-components";

interface TitleProps {
    size: string;
    weight: string;
    lineHeight: string;
    letterSpacing: string;
    caps: "lowercase" | "uppercase" | "none"

}
const title = ({ size, weight, lineHeight, letterSpacing, caps }: TitleProps) => css`
    font-family: Montserrat;
    font-size: ${size};
    font-weight: ${weight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    text-transform: ${caps};
`
const textStyles = {
    desktop: {
        titles: {
            l1: title({ size: "200px", weight: "900", lineHeight: "80%", letterSpacing: "0", caps: "uppercase" }),
            l2: title({ size: "48px", weight: "900", lineHeight: "80%", letterSpacing: "0", caps: "uppercase" }),
            l3: title({ size: "32px", weight: "900", lineHeight: "100%", letterSpacing: "0", caps: "uppercase" }),
        },
        texts: {
            l1: {
                default: title({ size: "18px", weight: "600", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
                caps24LS: title({ size: "18px", weight: "600", lineHeight: "150%", letterSpacing: ".24em", caps: "uppercase" }),
                lightweight: title({ size: "18px", weight: "500", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
            },
            l2: {
                default: title({ size: "14px", weight: "600", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
                caps: title({ size: "14px", weight: "600", lineHeight: "150%", letterSpacing: ".05em", caps: "uppercase" })
            }
        }
    },
    mobile: {
        titles: {
            l1: title({ size: "96px", weight: "900", lineHeight: "80%", letterSpacing: "0", caps: "uppercase" }),
            l2: title({ size: "32px", weight: "900", lineHeight: "80%", letterSpacing: "0", caps: "uppercase" }),
            l3: title({ size: "24px", weight: "900", lineHeight: "100%", letterSpacing: "0", caps: "uppercase" }),
        },
        texts: {
            l1: {
                default: title({ size: "16px", weight: "600", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
                caps24LS: title({ size: "16px", weight: "600", lineHeight: "150%", letterSpacing: ".24em", caps: "uppercase" }),
                lightweight: title({ size: "16px", weight: "500", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
            },
            l2: {
                default: title({ size: "12px", weight: "600", lineHeight: "150%", letterSpacing: "0", caps: "none" }),
                caps: title({ size: "12px", weight: "600", lineHeight: "150%", letterSpacing: ".05em", caps: "uppercase" })  
            }
        }
    }

}

export default textStyles