import styled from "styled-components"
import { CaptionBoldStyled, CaptionStyled, WrapperStyled } from "../ui/StyledComponents"
import { colors } from "../Colors"

const {light} = colors

const Background = styled.div `
    background-color: ${light}
`

const Wrapper = styled(WrapperStyled) `
    height: 280px;
`

const TextImageWrapper = styled.div `
    display: flex;
`

const TextWrapper = styled.div `
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Image = styled.img `
    height: 90px;
`

const CaptionBold = styled(CaptionBoldStyled) `
    margin-bottom: 20px;
`

const Caption = styled(CaptionStyled) `

`

export { Background, Wrapper, TextImageWrapper, TextWrapper, Image, CaptionBold, Caption }