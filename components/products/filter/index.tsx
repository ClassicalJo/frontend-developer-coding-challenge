import { Dispatch, MouseEvent, SyntheticEvent, TouchEvent } from "react";
import { FilterMethod, SortMethod } from "../../types";
import PageSelector from "./PageSelector";
import SelectionButton from "./SelectionButton";
import {
    StyledFilterBar,
    StyledFilterBarContainer,
    StyledFilterSelect,
    StyledFilterSelectWrapper,
    StyledFilterText,
    StyledOption,
    StyledPageSelector,
    StyledSelectedButtonContainer,
    StyledSelectedButtonWrapper,
    StyledVerticalSeparator
} from './styles'
import useTouch from "./useTouch";

interface AppProps {
    sortMethod: SortMethod;
    setSortMethod: Dispatch<SortMethod>;
    setFilterMethod: Dispatch<FilterMethod>;
    setCurrentPage: Dispatch<number>;
    changePage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function FilterBar({ changePage, sortMethod, setSortMethod, setFilterMethod, totalPages, currentPage, setCurrentPage }: AppProps): JSX.Element {
    let { start, reset, calcDif, offsetX, startDrag, endDrag, drag, goToMin } = useTouch()
    let onClick = (sortMethod: SortMethod) => {
        setSortMethod(sortMethod)
        setCurrentPage(0)
    }
    let onChange = (e: SyntheticEvent) => {
        let { value } = e.target as HTMLOptionElement
        setFilterMethod(value as FilterMethod)
        setCurrentPage(0)
    }
    let onFocus = () => goToMin()
    let methods: FilterMethod[] = ['All products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV']
    return (
        <StyledFilterBar >
            <StyledFilterBarContainer>
                <StyledFilterText>Filter by: </StyledFilterText>
                <StyledFilterSelectWrapper>
                    <StyledFilterSelect onChange={onChange}>
                        {methods.map((k, i) => (
                            <StyledOption
                                key={`optionMethod${i}`}
                                value={k}
                                text={k}
                            />
                        ))}

                    </StyledFilterSelect>
                </StyledFilterSelectWrapper>
                <StyledVerticalSeparator />
                <StyledSelectedButtonWrapper>
                    <StyledSelectedButtonContainer
                        onTouchStart={(e: TouchEvent) => start(e.touches[0].clientX)}
                        onTouchMove={(e: TouchEvent) => calcDif(e.touches[0].clientX)}
                        onTouchEnd={reset}
                        onMouseDown={(e: MouseEvent) => startDrag(e.pageX)}
                        onMouseMove={(e: MouseEvent) => drag(e.pageX)}
                        onMouseUp={endDrag}

                        offsetX={offsetX}>
                        <StyledFilterText>Sort by: </StyledFilterText>
                        <SelectionButton
                            text="Most Recent"
                            method="recent"
                            current={sortMethod}
                            onClick={onClick}
                        />
                        <SelectionButton
                            text="Lowest Price"
                            method="lowest-price"
                            current={sortMethod}
                            onClick={onClick}
                        />
                        <SelectionButton
                            text="Highest Price"
                            method="highest-price"
                            current={sortMethod}
                            onClick={onClick}
                            onFocus={onFocus}
                        />
                    </StyledSelectedButtonContainer>
                </StyledSelectedButtonWrapper>
            </StyledFilterBarContainer>
            <StyledPageSelector changePage={changePage} totalPages={totalPages} currentPage={currentPage} />
        </StyledFilterBar>
    )
}