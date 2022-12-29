import styled from "styled-components";
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents";
import { colors } from "../../../components/Colors";

const {dark} = colors


const Wrapper = styled(WrapperStyled)`
    height: 1200px;
    // padding: 220px 0 0;
    display: block;
`

const TopWrapper = styled.div `
    text-align: center;
    margin-bottom: 50px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`

const MiddleWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const ImageTextWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 20px;
    height: 250px;
`

const Image = styled.img `
    height: 100%;
`

const TextWrapper = styled.div `
    padding: 35px 0 35px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BottomWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
`

const ColumnInBottomWrapper = styled.div `
    width: 100%;
`

const PizzaNameContainer = styled.div `
    margin-bottom: 45px;
`

const PizzaLine = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
`

const MenuItemName = styled(CaptionBoldStyled) `
    line-height: 1.9;
    font-size: 1rem;
    white-space: nowrap;
`

const Line = styled.div `
    position: relative;
    width: 100%;
    margin: 0 10px;
    &::after {
        position: absolute;
        content: ' ';
        width: 100%;
        border-top: lightgrey 3px dotted;
    }
`

const Price = styled.div `
    position: relative;
    padding: 3px;
    border: solid 4px lightgrey;
    text-align: center;
    color: ${dark};
`

const Caption = styled(CaptionStyled) `

`

const CaptionBold = styled(CaptionBoldStyled) `

`
    
const MenuItemDescription = styled(CaptionStyled) `
    font-size: 0.9rem;
`

const Button = styled(ButtonStyled) `
    margin: 0 auto;
    width: 200px;
`

export {Wrapper, TopWrapper, MiddleWrapper,BottomWrapper, ColumnInBottomWrapper, PizzaNameContainer, PizzaLine, Line, Price,  ImageTextWrapper, Image, TextWrapper, Heading, SubHeading, Caption, CaptionBold, MenuItemName, MenuItemDescription, Button}