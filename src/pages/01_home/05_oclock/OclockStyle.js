
import styled, { keyframes, css } from "styled-components"
import { colors } from "../../../components/Colors"
import { ButtonStyled, CaptionStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"
import GradeIcon from '@mui/icons-material/Grade';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const {background, dark} = colors

const AnimationQuote = keyframes `
    0% {left: 400px}
    5% {left: -10px}
    33% {left: -10px}
    38% {left: -1020px}
    64% {left: -1020px}
    69% {left: -2030px}
    99% {left: -2030px}
    100% {left: -3000px}
`

const AnimationSliceTop = keyframes `
    0% {top: -1000px}
    55% {top: 60px}
    70% {top: 30px}
    85% {top: 40px}
    100% {top: 30px}
`
    // 80% {top: 20px}
    // 85% {top: 40px}

const RunAnimationSliceTop = css `
    animation: ${AnimationSliceTop} 1.3s ease-in-out
`

const AnimationSliceRight = keyframes `
    0% {right: -1000px}
    55% {right: 30px}
    70% {right: 0px}
    85% {right: 15px}
    100% {right: 0px}
`
    // 80% {right: -10px}
    // 85% {right: 10px}

const RunAnimationSliceRight = css `
    animation: ${AnimationSliceRight} 1.3s ease-in-out
`
const AnimationSliceBottom = keyframes `
    0% {top: 1000px}
    55% {top: 300px}
    70% {top: 330px}
    85% {top: 315px}
    100% {top: 330px}
`

const RunAnimationSliceBottom = css `
    animation: ${AnimationSliceBottom} 1.3s ease-in-out
`

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 800px;
    color: white;
    padding-bottom: 15px;
    min-width: 1350px;
`

const LeftSideWrapper = styled.div `

`

const ColorHeading = styled(ColorHeadingStyled) `
    margin-bottom: 30px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `
    margin-bottom: 30px;
`
const QuoteBox = styled.div `
    position: relative;
    overflow: hidden;
    height: 220px;
    width: 400px;
    white-space: nowrap;
`
const QuoteContainer = styled.div `
    position: absolute;
    transition: 0.8s;
    display: flex;
    gap: 10px;
    animation-name: ${AnimationQuote};
    animation-duration: 10s;
    animation-iteration-count: infinite;
`

const QuoteWrapper = styled.div `
    min-width: 1000px;
    height: 220px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Caption = styled(CaptionStyled) `

`

const AuthorWrapper = styled.div `
    display: flex;
    width: 400px;
`

const NameStarWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0 10px 10px;
`

const StarWrapper = styled.div `
    display: flex;
`

const Star = styled(GradeIcon) `
    color: ${dark};
    padding: 0;
    margin: 0;
`

const DotsWrapper = styled.div `
    cursor: pointer;
    margin-left: 350px;
    padding: 20px 0 80px;
    display: flex;
    width: 50px;
    justify-content: space-between;
`

const Dot = styled.div `
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: yellow;
`


const Quote = styled(FormatQuoteIcon) `
color: ${dark};
`

const Image = styled.img `

`

const Button = styled(ButtonStyled) `
    width: 250px;
`

const RightSideWrapper = styled.div `
    position: relative;
    height: 500px;
    background-color: blue;
`

const PizzaSliceTop = styled.img `
    position: absolute;
    width: 250px;
    right: 250px;
    top: ${(({showSlice}) => showSlice ? "30px" : "-1000px")};
    ${(({showSlice}) => showSlice ? RunAnimationSliceTop : "")}
    `
    
    const PizzaSliceRight = styled.img `
    position: absolute;
    top: 100px;
    width: 340px;
    right: ${(({showSlice}) => showSlice ? "0px" : "-1000px")};
    ${(({showSlice}) => showSlice ? RunAnimationSliceRight : "")}
    `
    
    const PizzaSliceBottom = styled.img `
    position: absolute;
    right: 150px;
    width: 250px;
    top: ${(({showSlice}) => showSlice ? "330px" : "1000px")};
    ${(({showSlice}) => showSlice ? RunAnimationSliceBottom : "")}
`


export { Background, Wrapper, LeftSideWrapper, ColorHeading, Heading, SubHeading, QuoteBox, QuoteContainer, QuoteWrapper, Caption, AuthorWrapper, StarWrapper, DotsWrapper, Dot, Image, Star, Quote, NameStarWrapper, Button, RightSideWrapper, PizzaSliceTop, PizzaSliceRight, PizzaSliceBottom }


// const Dot2 = styled.div `
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: red;
// `

// const Dot3 = styled.div `
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: red;
// `