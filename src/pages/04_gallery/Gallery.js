import Gallery from "../01_home/07_gallery/Gallery";
import FooterWide from "../../components/footerWide/FooterWide";
import FooterNarrow from "../../components/footerNarrow/FooterNarrow";
import { ComponentsWrapper } from "../../components/ui/Wrappers";

const GalleryComponent = () => {
  return (
    <ComponentsWrapper>
        <Gallery />
        <FooterWide />
        <FooterNarrow />
    </ComponentsWrapper>
  )
}

export default GalleryComponent