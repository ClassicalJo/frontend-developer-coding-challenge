import { StyledBackground, StyledBrowse, StyledBrowseWrapper, StyledCardContainer } from "./styles";
import Card from './Card'
import cards from './cards'

export default function Browse(): JSX.Element {
    return (
        <StyledBrowse>
            <StyledBrowseWrapper>
                <StyledBackground />
                <StyledCardContainer>
                    {cards.map((k, i) => <Card key={`cardElement${i}`} {...k} />)}
                </StyledCardContainer>
            </StyledBrowseWrapper>

        </StyledBrowse>
    )
}