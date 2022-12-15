import styled, { keyframes, css } from "styled-components";
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../ui/StyledComponents";
import { colors } from "../Colors";


const {dark} = colors

const Animation = keyframes `
    0% {opacity: 0, bottom: 1000px}
    100% {opacity: 1, bottom: -177px}
`

const dropLargePizza = css `
    animation: ${Animation} 2s;
`

const Wrapper = styled(WrapperStyled)`
    height: 710px;
    padding: 100px 0 150px;
    display: flex;
    justify-content: left;
    gap: 20px;
`
const Form = styled.form `
    height: 100%;
    width: 50%;
`

const NameContainer = styled.div `
    width: 48%;
    display: inline-block;
    &:first-of-type {
        margin-right: 20px;
    }

`

const Input = styled.input `
    width: 100%;
    height: 40px;
    border: lightgray 1px solid;
    margin: 5px 0;
    padding: 0 10px;
    color: grey;
    &:focus {
        outline: none;
    }
`

const Label = styled.label `
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
    &::after {
        content: " *";
        position: relative;
        top: -3px;
        color: red;
        font-size: 0.7rem;
        
    }
`

const TextArea = styled.textarea `
    display: block;
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    color: grey;
    border: lightgray 1px solid;
    &:focus {
        outline: none;
    }
`

const Subscript = styled.p `
    color: gray;
    font-size: 0.8rem;
`

const Button = styled(ButtonStyled) `
    font-size: 0.8rem;
    width: 145px;
    height: 45px;
    margin-top: 10px;
`


const RightWrapper = styled.div `
    height: 100%;
    width: 50%;
`

const Image = styled.img `
    height: 80px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`

const MainText = styled.p `
    color: gray;
    margin-top: 66px;
`

const LargePizza = styled.img `
    transition: 1s;
    position: absolute;
    right: 0;
    opacity: ${(({largePizzaDrop}) => largePizzaDrop ? "1" : "0")};
    bottom: ${(({largePizzaDrop}) => largePizzaDrop ? "-177px" : "1000px")};
`

const SocialWrapper = styled.div `
    display: flex;
    margin-top: 10px;
    cursor: pointer;
`

const SocialContainer = styled.div `
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${dark};
    margin-right: 10px;
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
`

export { Form, NameContainer, Input, Label, TextArea, Subscript, Button, Wrapper, RightWrapper, Image, Heading, SubHeading, MainText, LargePizza, SocialWrapper, SocialContainer }