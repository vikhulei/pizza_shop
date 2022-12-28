import { useRef } from "react";
import SliceSlice from "../01_home/03_slice_slice/SliceSlice";
import FanClub from "../01_home/08_fanClub/FanClub";
import OClock from "../01_home/05_oclock/Oclock";
import ChooseSlice from "../01_home/02_choose_slice/ChooseSlice";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";
import { ComponentsWrapper } from "../../components/ui/Wrappers";

const About = () => {
  const compsRef = useRef()
  return (
    <ComponentsWrapper ref={compsRef}>
        <SliceSlice />
        <FanClub compsRef={compsRef}/>
        <OClock compsRef={compsRef}/>
        <ChooseSlice />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default About