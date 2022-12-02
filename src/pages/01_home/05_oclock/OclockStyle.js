
import styled, { keyframes, css } from "styled-components"
import { colors } from "../../../components/Colors"
import { CaptionStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Animation = keyframes `
    0% {left: 400px}
    5% {left: 0px}
    33% {left: 0px}
    38% {left: -1000px}
    64% {left: -1000px}
    69% {left: -2000px}
    99% {left: -2000px}
    100% {left: -3000px}
`

// const Animation = keyframes `
//     0% {transform: translateX(400px)}
//     5% {transform: translateX(0px)}
//     33% {transform: translateX(0px)}
//     38% {transform: translateX(-1000px)}
//     64% {transform: translateX(-1000px)}
//     69% {transform: translateX(-2000px)}
//     99% {transform: translateX(-2000px)}
//     100% {transform: translateX(-3000px)}
// `

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 800px;
    color: white;
`

const LeftSideWrapper = styled.div `

`

const ColorHeading = styled(ColorHeadingStyled) `

`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`
const QuoteBox = styled.div `
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 70px;
    white-space: nowrap;
    display: flex;
`
const QuoteContainer = styled.div `
    transition: 0.8s;
    position: absolute;
    width: fit-content;
    display: flex;
    animation-name: "";
    animation-name: ${Animation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
`

const QuoteWrapper = styled.div `
    min-width: 1000px;
    transition: 0.5s;
    `

const Caption = styled(CaptionStyled) `

`

const AuthorWrapper = styled.div `

`

const StarWrapper = styled.div `

`

const DotsWrapper = styled.div `
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    width: 50px;
    justify-content: space-between;
`

const Dot = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: yellow;
`

const Dot2 = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`

const Dot3 = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
`


const Image = styled.img `

`


export { Background, Wrapper, LeftSideWrapper, ColorHeading, Heading, SubHeading, QuoteBox, QuoteContainer, QuoteWrapper, Caption, AuthorWrapper, StarWrapper, DotsWrapper, Dot, Dot2, Dot3, Image }