import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { ButtonStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    flex-direction: column;
    padding: 80px 0;
    height: 1000px;
    text-align: center;
    color: white;
`

const TopWrapper = styled.div `
    text-align: center;
`


const ColorHeading = styled(ColorHeadingStyled) `
    margin-bottom: 20px;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `
    font-weight: bold;
`

const GalleryWrapper = styled.div `
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
`

const Image = styled.img `
    object-fit: cover;
    height: 100%;
    width: 100%;
    &:hover {
        transition: 0.4s;
        cursor: pointer;
        opacity: 0.5;
    }
`

const Button = styled(ButtonStyled) `
    position: relative;
    margin: 0 auto;
    width: 270px;
`


export { Background, Wrapper, TopWrapper, ColorHeading, Heading, SubHeading, GalleryWrapper, Image, Button  }