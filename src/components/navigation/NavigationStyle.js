import styled from "styled-components"
import { WrapperStyled } from "../ui/StyledComponents"

const Wrapper = styled(WrapperStyled) `
    padding: 0 100px;
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