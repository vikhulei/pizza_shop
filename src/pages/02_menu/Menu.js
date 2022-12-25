import Menu from "../01_home/04_menu/Menu";
import FooterWide from "../../components/footerWide/FooterWide";
import MinutesAway from "../01_home/06_minutesAway/MinutesAway";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";
import { ComponentsWrapper } from "../../components/ui/Wrappers";

const MenuComponent = () => {
  return (
    <ComponentsWrapper>
        <Menu />
        <FooterWide />
        <MinutesAway />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default MenuComponent