import styled from "styled-components";
import { colors } from "../Colors"

const {dark} = colors

const WrapperStyled = styled.div `
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Heading = styled.h1 `

`
const SubHeading = styled.h2 `

`
const SubHeadingBold = styled.h2 `

`
const ColorHeading = styled.h1 `

`

const Caption = styled.p `

`

const CaptionBold = styled.p `

`

const Button = styled.a `
    padding: 10px 35px;
    background-color: ${dark};
    border-radius: 15px;
    border-top-left-radius: 0px;
    color: black;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    &:active {
        background-color: darkred;
    }
`


export {WrapperStyled, Heading, SubHeading, SubHeadingBold, ColorHeading, Caption, CaptionBold, Button}