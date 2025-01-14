import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { appear, colorBackground, colorBackground30, disappear, expandUserCard, rotateDown, rotateUp, shrinkUserCard } from "./commonStyles/animations";

export default createGlobalStyle`
    ${normalize}
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;   
        -webkit-tap-highlight-color: rgba(255,255,255,0);
    }
    #root{
        margin:0 auto;
    }
    html{
        overflow-y: scroll; 
        overflow-x: hidden;
    }
    ${expandUserCard}
    ${shrinkUserCard}
    ${appear}
    ${disappear}
    ${rotateUp}
    ${rotateDown}
    ${colorBackground}
    ${colorBackground30}
`