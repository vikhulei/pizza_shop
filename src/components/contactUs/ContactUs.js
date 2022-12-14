import { Wrapper, TopWrapper, BottomWrapper, ImageTextWrapper, Image, Heading, SubHeading, Caption, CaptionBold } from "./ContactUsStyle";
import chooseSlice4 from "../../assets/home/chooseSlice4.png"


const ContactUs = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Heading>Don't look for love</Heading>
                <SubHeading>look for pizza</SubHeading>
                <Image src={chooseSlice4} alt="slice" style={{"width": "65px", "marginTop": "10px"}} />
            </TopWrapper>
            <BottomWrapper>
                
            </BottomWrapper>
        </Wrapper>
    )
}

export default ContactUs