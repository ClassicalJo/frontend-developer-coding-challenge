import { StyledPageButtonLeft, StyledPageButtonRight, StyledPageButtonWrapper, StyledPageSelector, StyledPageSpan, StyledPageText } from "./styles";
import { Dispatch } from "react";
import chevron from '../../../assets/icons/chevron-default.svg'
import chevronDisabled from '../../../assets/icons/chevron-disabled.svg'
import keyDown from "../../keyDown";

interface AppProps {
    changePage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function PageSelector({ changePage, totalPages, currentPage }: AppProps): JSX.Element {
    let leftDisabled = currentPage === 0
    let rightDisabled = currentPage + 1 >= totalPages
    return (
        <StyledPageSelector>
            <StyledPageButtonWrapper
                onClick={() => changePage(-1)}
                onKeyDown={keyDown(() => changePage(-1))}
                disabled={leftDisabled}
            >
                <StyledPageButtonLeft
                    tabIndex={0}
                    src={leftDisabled ? chevronDisabled : chevron}
                />
            </StyledPageButtonWrapper>
            <StyledPageText>
                <StyledPageSpan>{`Page ${currentPage + 1}`}</StyledPageSpan>
                {` of ${totalPages}`}
            </StyledPageText>
            <StyledPageButtonWrapper
                disabled={rightDisabled}
                onClick={() => changePage(1)}
                onKeyDown={keyDown(() => changePage(-1))}>
                <StyledPageButtonRight
                    tabIndex={0}
                    src={rightDisabled ? chevronDisabled : chevron}
                />
            </StyledPageButtonWrapper>
        </StyledPageSelector>
    )
}