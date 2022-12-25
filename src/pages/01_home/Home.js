import styled from "styled-components"
import { ComponentsWrapper } from "../../components/ui/Wrappers";
import PizzaMia from "./01_pizzamia/PizzaMia";
import ChooseSlice from "./02_choose_slice/ChooseSlice";
import SliceSlice from "./03_slice_slice/SliceSlice";
import Menu from "./04_menu/Menu"
import OClock from "./05_oclock/Oclock"
import MinutesAway from "./06_minutesAway/MinutesAway"
import Gallery from "./07_gallery/Gallery"
import FunClub from "./08_funClub/FunClub"
import ContactUs from "../../components/contactUs/ContactUs";
import FooterWide from "../../components/footerWide/FooterWide";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";

const Home = () => {
  return (
    <ComponentsWrapper>
        <PizzaMia />
        <ChooseSlice />
        <SliceSlice />
        <Menu />
        <OClock />
        <MinutesAway />
        <Gallery />
        <FunClub />
        <ContactUs />
        <FooterWide />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default Home