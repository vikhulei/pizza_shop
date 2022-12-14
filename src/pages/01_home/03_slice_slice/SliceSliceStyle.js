import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 650px;
    color: white;
`

const LeftWrapper = styled.div `

`

const ColorHeading = styled(ColorHeadingStyled) `
    margin-bottom: 20px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `
    margin-bottom: 25px;
`

const Text = styled.p `
    margin-bottom: 25px;
`

const Button = styled(ButtonStyled) `
    width: 200px;
    margin-top: 40px;
`

const ImageContainer = styled.div `
    width: 710px;
`

const Image = styled.img `
    width: 100%;
`

const BottomWrapper = styled.div `
    position: absolute;
    bottom: -120px;
    width: 1050px;
    height: 200px;
    background-color: ${dark};
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`

const IconTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 33px 0;
    color: black;
`

const Icon = styled.img `
    height: 70px;
`

const CaptionBold = styled(CaptionBoldStyled) `

`

const Caption = styled(CaptionStyled) `

`

export { Background, Wrapper, LeftWrapper, ColorHeading, Heading, SubHeading, Text, Button, ImageContainer, Image, BottomWrapper, IconTextContainer, Icon, CaptionBold, Caption }