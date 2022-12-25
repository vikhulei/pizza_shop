import { useState, useEffect } from "react"
import { Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper, Logo, HamburgerOpen, HamburgerClose } from "./NavigationStyle"
import logo from "../../assets/logo.png"

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const hideMenu = (e) => {
        console.log(e)
        if(showMenu) {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", () => { alert(showMenu)
            if(showMenu) {
            setShowMenu(false)
        }}
        )
        return () => window.removeEventListener("click", () => setShowMenu(false) )
    }, [])

    return (
        <Background>
            <Wrapper>
                <HamburgerOpen onClick={toggleMenu}>MENU</HamburgerOpen>
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