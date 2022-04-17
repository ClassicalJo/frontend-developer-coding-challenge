import { StyledBackground, StyledBrowse } from "./styles";
import Card from './Card'
import cards from './cards'

export default function Browse(): JSX.Element {
    return (
        <StyledBrowse>
            <StyledBackground />
            {cards.map((k, i) => <Card key={`cardElement${i}`} {...k} />)}
        </StyledBrowse>
    )
}