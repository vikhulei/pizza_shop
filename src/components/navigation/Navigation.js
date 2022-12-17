import { Background, Wrapper, MenuItemsWrapper, MenuItem, LogoWrapper } from "./NavigationStyle"
import logo from "../../assets/logo.png"

const Navigation = () => {
    return (
        <Background>
            <Wrapper>
                <MenuItemsWrapper>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>MENU</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                </MenuItemsWrapper>
                <LogoWrapper>
                    <img src={logo} alt="logo image" style={{ "width": "230px" }} />
                </LogoWrapper>
                <MenuItemsWrapper>
                    <MenuItem>GALLERY</MenuItem>
                    <MenuItem>BLOG</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                </MenuItemsWrapper>
            </Wrapper>
        </Background>
    )
}

export default Navigation