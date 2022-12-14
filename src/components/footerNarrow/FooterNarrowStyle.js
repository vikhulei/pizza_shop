import styled from "styled-components"
import { WrapperStyled } from "../ui/StyledComponents"

const Background = styled.div `
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
`

const MainText = styled.p `
    display: inline-block;
`
    
const HyperText = styled.a `
    display: inline-block;
    text-decoration: none;
    color: white;
`

export {Background, MainText, HyperText}
