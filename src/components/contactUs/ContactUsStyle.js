import styled from "styled-components";
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../ui/StyledComponents";
import { colors } from "../Colors";

const {backgroundColor, light} = colors

const Wrapper = styled(WrapperStyled)`
    height: 610px;
    padding: 100px 0 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    algn-items: center;
`

const TopWrapper = styled.div `
    text-align: center;
`

const BottomWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const ImageTextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 330px;
    height: 270px;
`

const Image = styled.img `
    height: 80px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`

const Caption = styled(CaptionStyled) `
    line-height: 1.6;
`

const CaptionBold = styled(CaptionBoldStyled) `

`

export {Wrapper, TopWrapper, BottomWrapper, ImageTextWrapper, Image, Heading, SubHeading, Caption, CaptionBold }