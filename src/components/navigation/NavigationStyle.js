import styled from "styled-components"
import { WrapperStyled } from "../ui/StyledComponents"
import {colors} from "../Colors"


const {dark} = colors

const Background = styled.div `
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 100;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Wrapper = styled(WrapperStyled) `
    position: relative;
    padding: 0 100px;
`
    
const MenuItemsWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 300px;
`

const LogoWrapper = styled.div `
    transition: 0.6s;
    width: 400px;
    text-align: center;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`

const MenuItem = styled.p `
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    &:hover {
        color: ${dark};
    }
`

export {Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper}