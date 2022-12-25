import styled from "styled-components"
import { Link } from "react-router-dom"
import { WrapperStyled } from "../ui/StyledComponents"
import {colors} from "../Colors"


const {dark} = colors

const Background = styled.div `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 65px;
    background-color: white;
    z-index: 100;
`

const Wrapper = styled(WrapperStyled) `
    padding: 0 100px;
    @media screen and (max-width: 1000px) {
        position: absolute;
        width: 100vw;
        top: 65px;
        padding: 0 0 0px 80px;
        background-color: white;
        opacity: 0.9;
        flex-direction: column;
    }    
`
    
const MenuItemsWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 300px;
    @media screen and (max-width: 1000px) {
        display: ${(({showMenu}) => showMenu ? "flex" : "none")};
        width: 100%;
        flex-direction: column;
        height: 200px;
        width: 100vw;
        justify-content: space-around;
    }
`

const LogoWrapper = styled.div `
    transition: 0.6s;
    width: 400px;
    text-align: center;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
    @media screen and (max-width: 1000px) {
        position: absolute;
        left: 0;
        padding-left: 25px;
        top: -65px;
        text-align: left;
        width: 100vw;
        background-color: white;
    }
`

const Logo = styled.img `
    width: 200px;
`

const HamburgerOpen = styled.div `
    position: absolute;
    right: 30px;
    top: -65px;
    height: 65px;
    display: flex;
    align-items: center;
    z-index: 100;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: ${dark};
    }
`

const HamburgerClose = styled.div `

`


const MenuItem = styled(Link) `
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    cursor: pointer;
    width: fit-content;
    &:hover {
        color: ${dark};
    }
    @media screen and (max-width: 1000px) {
        font-weight: bold;
        text-transform: none;
    }
`

export {Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper, Logo, HamburgerOpen, HamburgerClose }