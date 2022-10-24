import styled from "styled-components"

const Wrapper = styled.div `
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
    
const MenuItemsWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 300px;
`

const LogoWrapper = styled.div `
    width: 400px;
    text-align: center;
`

const MenuItem = styled.p `
    font-family: verdana;
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
`

export {Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper}