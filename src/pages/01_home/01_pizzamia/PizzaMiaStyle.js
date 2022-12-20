import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { WrapperStyled, CaptionStyled, CaptionBoldStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Background = styled.div `
    position: relative;
    top: 70px;
    background: url(${background});
    @media screen and (max-width: 800px) {
        top: 0;
    }
`

const Wrapper = styled(WrapperStyled) `
    max-height: 700px;
    min-height: 500px;
    height: 50vmax;
    color: white;
    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        max-height: 2000px;
        height: auto;
        padding: 80px 0;
        // background-color: red;
    }
`

const CallToActionWrapper = styled.div `
    width: 50%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        text-align: center;
        width: 100%;
        // background-color: red;
    }
`

const PizzaMiaWrapper = styled.div `

`

const Heading = styled.p `
    font-family: Fuzzy Bubbles;
    font-size: min(max(4.5rem, 8.5vw), 7rem);
    font-weight: bold;
    color: ${dark};
    width: 100%;
`

const SubHeading = styled.p `
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 30px;
`

const OrderButton = styled.a `
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

const IconsTextsWrapper = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 50px;
        width: 100%;
        align-items: center;
        margin-top: 100px;
    }
`

const IconTextContainer = styled.div `
    display: flex;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: space-between;
        width: 30vw;
    }
`

const IconWrapper = styled.div `

`

const Icon = styled.img `
    height: 50px;
    @media screen and (max-width: 800px) {
        height: auto;
        width: 100%;
    }
`

const TextWrapper = styled.div `
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    @media screen and (max-width: 800px) {
        margin-top: 20px;
        height: 50px;
        justify-content: space-between;
    }
`

const IconHeading = styled(CaptionBoldStyled) `
    margin-bottom: 10px;
    font-weight: bold;
`
    
const IconSubHeading = styled(CaptionStyled) `
font-size: 0.9rem;
`

const PizzaImageContainer = styled.div `

    max-width: 40vw;
    @media screen and (max-width: 800px) {
        max-width: 100%;
        width: 100%;
        padding: 50px;        
    }
`

const PizzaImage = styled.img `
    width: 100%;
`

export { Background, Wrapper, CallToActionWrapper, PizzaMiaWrapper, Heading, SubHeading, OrderButton, IconsTextsWrapper, IconTextContainer, IconWrapper, Icon, TextWrapper, IconHeading, IconSubHeading, PizzaImageContainer, PizzaImage }