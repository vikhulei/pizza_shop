import styled from "styled-components";
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents";
import { colors } from "../../../components/Colors";

const {backgroundColor, light} = colors

const Wrapper = styled(WrapperStyled)`
    height: 1200px;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    algn-items: center;
`

const TopWrapper = styled.div `
    text-align: center;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`

const MiddleWrapper = styled.div `

`

const ImageTextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 20px 20px;
    height: 500px;
    width: 330px;
    border-top-right-radius: 150px;
    border-top-left-radius: 150px;
    background-color: ${light}
`

const Image = styled.img `
    width: 100%;
`


const BottomWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Caption = styled(CaptionStyled) `

`

const CaptionBold = styled(CaptionBoldStyled) `

`

const Button = styled(ButtonStyled) `

`

export {Wrapper, TopWrapper, MiddleWrapper,BottomWrapper, ImageTextWrapper, Image, Heading, SubHeading, Caption, CaptionBold, Button}