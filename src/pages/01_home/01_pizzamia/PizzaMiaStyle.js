import styled from "styled-components"
import { colors } from "../../../components/Colors"
import { WrapperStyled } from "../../../components/ui/StyledComponents"

const {background} = colors

const Background = styled.div `
    background: url(${background});

`

const Wrapper = styled(WrapperStyled) `
    height: 500px;
    padding: 0 20px;
`



export { Background, Wrapper }