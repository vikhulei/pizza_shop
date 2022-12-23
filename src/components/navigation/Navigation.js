import { useState } from "react"
import { Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper, Logo, HamburgerOpen, HamburgerClose } from "./NavigationStyle"
import logo from "../../assets/logo.png"

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <Background>
            <Wrapper>
                <HamburgerOpen onClick={toggleMenu}>MENU</HamburgerOpen>
                <MenuItemsWrapper showMenu={showMenu}>
                    <MenuItem>Home</MenuItem>
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