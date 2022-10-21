import styled from "styled-components"

const NavBar = styled.div `
    height: 80px;
    display: flex;
    justify-content: center;
    `
    
    const Wrapper = styled.div `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    // padding-right: 200px;
    display: flex;
    width: 1100px;
    // max-width: 1100px;
    justify-content: space-between;
    align-items: center;
    `
    
const MenuItemsWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 300px;
`

const LogoWrapper = styled.div `
    max-width: 300px;
    text-align: center;
`

const MenuItem = styled.p `
    font-family: verdana;
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
`

export {NavBar, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper}