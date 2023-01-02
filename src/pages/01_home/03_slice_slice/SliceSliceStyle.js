import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"

const { background, dark } = colors

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 650px;
    color: white;
    flex-direction: column;
    padding: 70px 20px;
    margin-bottom: 200px;
    @media (max-width: 1100px) {
        height: auto;
        padding: 50px;
    }
        @media (max-width: 800px) {
        margin-bottom: 1100px;
    }
`

const TopWrapper = styled.div `
    display: flex;
    @media (max-width: 1100px) {
        flex-direction: column;
    }
`

const LeftWrapper = styled.div `
    margin-top: 5%;
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

const RightWrapper = styled.div `
    width: 70%;
    align-self: flex-end;
    @media (max-width: 1100px) {
        width: 90%;
        margin-top: 50px;
    }
`

const Image = styled.img `
    width: 100%;
`

const BottomWrapper = styled.div `
    position: relative;
    bottom: 10px;
    width: 1050px;
    max-width: 90vw;
    height: 200px;
    background-color: ${dark};
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    @media (max-width: 1100px) {
        position: absolute;
        bottom: -145px;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        bottom: -990px;
        height: fit-content;
        width: calc(100% - 100px);
    }
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
    @media (max-width: 800px) {
        height: 100px;
    }
`

const CaptionBold = styled(CaptionBoldStyled) `

`

const Caption = styled(CaptionStyled) `

`

export { Background, Wrapper, TopWrapper, LeftWrapper, ColorHeading, Heading, SubHeading, Text, Button, RightWrapper, Image, BottomWrapper, IconTextContainer, Icon, CaptionBold, Caption }