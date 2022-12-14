import styled from "styled-components"
import { WrapperStyled } from "../ui/StyledComponents"
import { colors } from "../Colors"

const {light} = colors

const Background = styled.div `
    background-color: ${light}
`

const Wrapper = styled(WrapperStyled) `
    height: 280px;
`

export {Background, Wrapper}