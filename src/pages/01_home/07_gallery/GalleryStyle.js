import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { ButtonStyled, ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"
import chooseSlice4 from "../../../assets/home/gallery/small_slice1.png"

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
    row-gap: 20px;
    column-gap: 25px;
`

const ImageContainer = styled.div `
    position: relative;
    
`

const Image = styled.img `
    object-fit: cover;
    height: 100%;
    width: 100%;
`
        
 const ImagePizza = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: url(${chooseSlice4}) no-repeat;
        background-position: 10% 90%;
        background-size: 20%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        &:hover {
            transition: 0.4s;
            opacity: 1;
        }
`

const LargeImageContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgrey;
    width: 80%;
    height: 50%;
`

const LargeImage = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Button = styled(ButtonStyled) `
    position: relative;
    margin: 0 auto;
    width: 270px;
`


export { Background, Wrapper, TopWrapper, ColorHeading, Heading, SubHeading, GalleryWrapper, ImageContainer, Image, ImagePizza, LargeImageContainer, LargeImage, Button  }