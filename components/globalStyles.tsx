import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export default createGlobalStyle`
    ${normalize}
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    #root{
        margin:0 auto;
    }
    html{
        overflow-y: scroll; 
        overflow-x: hidden;
    }
`