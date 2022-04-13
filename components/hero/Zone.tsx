import { StyledProplessComponent } from "../types";

export default function Zone({ className }: StyledProplessComponent): JSX.Element {
    return (
        <p className={className}>ZONE</p>
    )
}