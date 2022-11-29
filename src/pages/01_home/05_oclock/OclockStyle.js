import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { ColorHeadingStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents"

const {background, dark} = colors

const Background = styled.div `
    background: url(${background});
`

const Wrapper = styled(WrapperStyled) `
    height: 800px;
    color: white;
`

const LeftSideWrapper = styled.div `

`

const ColorHeading = styled(ColorHeadingStyled) `

`

const Heading = styled(HeadingStyled) `

`

const SubHeadingBold = styled(SubHeadingStyled) `

`

const Image = styled.img `

`


export { Background, Wrapper }