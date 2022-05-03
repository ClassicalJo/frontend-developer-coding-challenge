import styled from "styled-components";
import breakpoints from "../breakpoints";
import mixins from "../commonStyles/mixins";

export const StyledMain = styled.div`
    margin: 0 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 128px;
    @media (min-width: ${breakpoints.tablet}){
        margin: 0 80px;
        margin-bottom: 160px;   
    }
    
`
export const StyledMainWrapper = styled.div`
    @media (min-width: ${breakpoints.tablet}) {
        max-width: 980px;
    }
    @media (min-width: ${breakpoints.desktop}){
        max-width: 1464px;
    }
    
`