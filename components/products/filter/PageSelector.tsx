import { StyledPageButtonLeft, StyledPageButtonRight, StyledPageSelector, StyledPageSpan, StyledPageText } from "./styles";
import { Dispatch } from "react";
import chevron from '../../../assets/icons/chevron-default.svg'

interface AppProps {
    changePage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function PageSelector({ changePage, totalPages, currentPage }: AppProps): JSX.Element {
    return (
        <StyledPageSelector>
            <StyledPageButtonLeft src={chevron} onClick={() => changePage(-1)} />
            <StyledPageText>
                <StyledPageSpan>{`Page ${currentPage + 1}`}</StyledPageSpan>
                {` of ${totalPages}`}
            </StyledPageText>
            <StyledPageButtonRight src={chevron} onClick={() => changePage(1)} />
        </StyledPageSelector>
    )
}