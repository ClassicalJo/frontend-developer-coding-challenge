import Image from "next/image";
import styled from "styled-components";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import UnstyledNextImage from "../commonStyles/StyledNextImage";
import textStyles from "../commonStyles/text";

export const StyledBrowse = styled.div`
    display: flex;
    height: 900px;
    align-items: center;
    transform: translateX(calc((1464px - 1590px)/2));
`

export const StyledCard = styled.div`
    box-shadow: 2.5px 2.5px 10px rgba(0,0,0,0.05);
    border: solid 1px ${colors.neutrals["300"]};
    border-radius: 35px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px;
    height:680px;
    min-width:530px;
    left:0;
    right: 0;
    top: -20px;
    
    &:nth-child(2) {
        transform: rotate(-3deg);
        left: 6%;
        top: 1%;
        z-index: 1;
    }
    &:nth-child(3) {
        z-index: 2;
    }
    &:last-child {
        transform: rotate(3deg);
        left: -6%;
        top:1%;
        z-index: 3;
    }
`

export const StyledWalkImage = styled(UnstyledNextImage)`
    position: absolute;
    width:500px;
    height:500px;
    background: ${colors.specials.illustrationBG};
    left: calc((100% - 500px) /2);    
    
`
export const StyledWalkImageWrapper = styled.div`
    border-radius:27.5px 27.5px 0 0;
    border: 1px solid ${colors.neutrals["300"]};
    position: relative;
    overflow: hidden;
    flex:1;
    width:500px;
`
export const StyledTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`
export const StyledTitle = styled.p`
    ${textStyles.desktop.titles.l3}
    background: ${colors.brand.default};
    ${mixins.gradientText(colors.brand.default)}
    
`

export const StyledSubtitle = styled.p`
    ${textStyles.desktop.texts.l1.default}
    color: ${colors.neutrals["600"]};
    margin-top: 14px;
    margin-bottom:8px;
    max-width: 75%;
`

export const StyledIconWrapper = styled.div`
    width: 48px;
    height: 48px; 
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    background: ${colors.neutrals['200']};
`

export const StyledTextArea = styled.div`
    padding: 16px 23px;
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 0px 0px 27.5px 27.5px;
    border-top: 0px;
`
export const StyledBackground = styled.div`
    background: ${colors.specials.sectionBG};
    position: absolute;
    left: calc((1920px - 1590px) /-2);
    height: 525px;
    width: 1920px;
`