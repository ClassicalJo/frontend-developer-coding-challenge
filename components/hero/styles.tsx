import styled from "styled-components"
import Picture from "./Picture"
import Explore from "./Explore"
import Zone from "./Zone"
import Subtitle from "./Subtitle"
import Tech from "./Tech"
import Waves from './Waves'
import textStyles from "../commonStyles/text"
import colors from "../commonStyles/colors"
import mixins from '../commonStyles/mixins'
import UnstyledNextImage from "../commonStyles/StyledNextImage"
import breakpoints from "../breakpoints"

export const StyledTextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex:1;
    @media (min-width: ${breakpoints.desktop}){
        margin-right: 140px;
        align-items: stretch;
    }
`
export const StyledColumns = styled.div`
    margin-top: 100px;
    margin-bottom: 336px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: ${breakpoints.desktop}){
        margin-bottom: 135px;
        flex-direction: row;
        text-align: left;
    }
`
export const StyledPicture = styled(Picture)`
    flex:1;
    position: relative;
    width: 580px;
    height: 518.58px;
    pointer-events: none;
    
    @media (min-width: ${breakpoints.desktop}){
        height:600px;
        min-width: 720px;
        border-radius:15%;
        background: ${colors.specials.sectionBG};
        box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
    }
`
export const StyledPictureWrapper = styled.div`
    position: absolute;
    width: 580px;
    height: 518.58px;
    bottom: -504px;
    z-index: 4;
    object-fit: cover;
    @media (min-width: ${breakpoints.desktop}){
        width: 900px;
        height:900px;
        bottom:-10%;
        left:-12.5%;
        border-radius:15%;
        clip-path: path("M0 0 L 0 840 L 800 840 L 800 0 Z");
    }

`

export const StyledExplore = styled(Explore)`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.caps24LS,
    textStyles.mobile.texts.l1.caps24LS)}
    color: ${colors.neutrals["600"]};
    margin-bottom: 8px;
    
`
export const StyledTech = styled(Tech)`
    ${textStyles.withQuery(
    textStyles.desktop.titles.l1,
    textStyles.mobile.titles.l1)}
    ${mixins.gradientText(colors.brand.default)}
    max-width: 602px;
`
export const StyledZone = styled(Zone)`
    ${textStyles.withQuery(
    textStyles.desktop.titles.l1,
    textStyles.mobile.titles.l1)}
    color: ${colors.neutrals["900"]}
`
export const StyledSubtitle = styled(Subtitle)`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    color: ${colors.neutrals["600"]};
    margin-top: 24px;
    margin-bottom: 64px;
    max-width: 289px;
    @media (min-width: ${breakpoints.desktop}){
        max-width: 523px;
    }

`
export const StyledProductButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 303px;
    height: 64px;
    background: ${colors.brand.default};
    border-radius: 24px;
    border: 0px;
    user-select: none;
    cursor:pointer;
    :hover {
        background: ${colors.brand.hover};
    }
    @media (min-width: ${breakpoints.desktop}){
        flex-direction: row;
        text-align: left;
        width: 317.5px;
        height: 78px;
    }
    
`

export const StyledProductButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledProductButtonText = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default
)}
    margin-right:4px;
    color:white;
`

export const StyledIconWrapper = styled(UnstyledNextImage)`
        position:relative;
        ${mixins.responsiveIcons(24, 20)}
        transform: scale(1.15);
`

export const StyledWaves = styled(Waves)`
    position:absolute;
    align-self: flex-start;
    z-index: -2; 
    width:1920px;
    height: 1600px;

`
export const StyledWavesWrapper = styled.div`
    position: relative;
`
export const StyledWavesOverflow = styled.div`
    width:1920px;
    height:1600px;
    position: absolute;
    right: 0;
    pointer-events: none;
    top: -135px;
    @media (min-width: ${breakpoints.desktop}){
        left:calc((1920px - 1464px) /-2);        
        top: -430px;    
    }
`
