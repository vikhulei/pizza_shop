import styled from "styled-components";
import { colors } from "../Colors"

const {dark} = colors

const WrapperStyled = styled.div `
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: red;
`

const HeadingStyled = styled.h1 `
    font-size: 2.5rem;
    line-height: 1;
`
    
const SubHeadingStyled = styled.h2 `
    font-weight: 200;
    font-size: 2.3rem;
    line-height: 1;
`

const SubHeadingBoldStyled = styled.h2 `

`

const ColorHeadingStyled = styled.h1 `
    font-size: 1.85rem;
    color: ${dark};
`

const CaptionStyled = styled.p `
    font-size: 1.1rem;
`

const CaptionBoldStyled = styled.p `
    font-size: 1.1rem;
    font-weight: bold;
`

const ButtonStyled = styled.a `
    display: flex;
    align-items: center;
    width: 150px;
    padding: 15px 35px;
    background-color: ${dark};
    border-radius: 25px;
    border-top-left-radius: 0px;
    color: black;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    &:active {
        background-color: darkred;
    }
`

export { WrapperStyled, HeadingStyled, SubHeadingStyled, SubHeadingBoldStyled, ColorHeadingStyled, CaptionStyled, CaptionBoldStyled, ButtonStyled }