import { useState, useRef } from "react"
import { Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper, Logo, HamburgerOpen } from "./NavigationStyle"
import logo from "../../assets/logo.png"
import { useHideMenu } from "../../util/useHideMenu"

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef()
    
    
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    
    useHideMenu({menuRef, setShowMenu})

    return (
        <Background>
            <Wrapper>
                <HamburgerOpen ref={menuRef} onClick={toggleMenu}>MENU</HamburgerOpen>
                <MenuItemsWrapper showMenu={showMenu}>
                    <MenuItem to="/home">Home</MenuItem>
                    <MenuItem>Menu</MenuItem>
                    <MenuItem>About</MenuItem>
                </MenuItemsWrapper>
                <LogoWrapper showMenu={showMenu}>
                    <Logo src={logo} alt="logo image"/>
                </LogoWrapper>
                <MenuItemsWrapper showMenu={showMenu}>
                    <MenuItem>Gallery</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </MenuItemsWrapper>
            </Wrapper>
        </Background>
    )
}

export default Navigation