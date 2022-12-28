import { useRef } from "react";
import FooterWide from "../../components/footerWide/FooterWide";
import ContactUs from "../../components/contactUs/ContactUs";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";
import { ComponentsWrapper } from "../../components/ui/Wrappers";

const Contact = () => {

  const compsRef = useRef()  

  return (
    <ComponentsWrapper ref={compsRef}>
        <ContactUs compsRef={compsRef}/>
        <FooterWide />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default Contact