import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { WrapperStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Background = styled.div `
    position: relative;
    top: 70px;
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 700px;
    color: white;
`

const CallToActionWrapper = styled.div `
    width: 50%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PizzaMiaWrapper = styled.div `

`

const Heading = styled.p `
    font-family: Fuzzy Bubbles;
    font-size: 6rem;
    font-weight: bold;
    color: ${dark};
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
`

const IconTextContainer = styled.div `
    display: flex;
`

const IconWrapper = styled.div `

`

const Icon = styled.img `
    height: 50px;
`

const TextWrapper = styled.div `
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
`

const IconHeading = styled.p `
    margin-bottom: 10px;
    font-weight: bold;
`
    
const IconSubHeading = styled.p `

`

const PizzaImageContainer = styled.div `
    
`

const PizzaImage = styled.img `

`

export { Background, Wrapper, CallToActionWrapper, PizzaMiaWrapper, Heading, SubHeading, OrderButton, IconsTextsWrapper, IconTextContainer, IconWrapper, Icon, TextWrapper, IconHeading, IconSubHeading, PizzaImageContainer, PizzaImage }