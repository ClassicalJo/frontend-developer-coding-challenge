import { StyledPageButtonLeft, StyledPageButtonRight, StyledPageButtonWrapper, StyledPageSelector, StyledPageSpan, StyledPageText } from "./styles";
import { Dispatch } from "react";
import chevron from '../../../assets/icons/chevron-default.svg'
import chevronDisabled from '../../../assets/icons/chevron-disabled.svg'
import keyDown from "../../keyDown";

interface AppProps {
    className?: string;
    changePage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function PageSelector({ className, changePage, totalPages, currentPage }: AppProps): JSX.Element {
    let leftDisabled = currentPage === 0
    let rightDisabled = currentPage + 1 >= totalPages
    let pageUp = () => changePage(1)
    let pageDown = () => changePage(-1)
    return (
        <div className={className}>
            <StyledPageButtonWrapper
                tabIndex={leftDisabled ? -1 : 0}
                onClick={pageDown}
                onKeyDown={keyDown(pageDown)}
                disabled={leftDisabled}
            >
                <StyledPageButtonLeft
                    src={leftDisabled ? chevronDisabled : chevron}
                    alt={"Arrow Left"}
                />
            </StyledPageButtonWrapper>
            <StyledPageText>
                <StyledPageSpan>{`Page ${currentPage + 1}`}</StyledPageSpan>
                {` of ${totalPages}`}
            </StyledPageText>
            <StyledPageButtonWrapper
                tabIndex={rightDisabled ? -1 : 0}
                disabled={rightDisabled}
                onClick={pageUp}
                onKeyDown={keyDown(pageUp)}>
                <StyledPageButtonRight
                    src={rightDisabled ? chevronDisabled : chevron}
                    alt={"Arrow Right"}
                />
            </StyledPageButtonWrapper>
        </div>
    )
}