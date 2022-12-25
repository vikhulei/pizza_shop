import FooterWide from "../../components/footerWide/FooterWide";
import ContactUs from "../../components/contactUs/ContactUs";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";
import { ComponentsWrapper } from "../../components/ui/Wrappers";

const Contact = () => {
  return (
    <ComponentsWrapper>
        <FooterWide />
        <ContactUs />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default Contact