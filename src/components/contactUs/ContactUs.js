import { useRef, useEffect } from "react"
import { Form, NameContainer, Input, Label, TextArea, Subscript, Button, Wrapper, RightWrapper, Image, Heading, SubHeading, MainText, LargePizza, SocialWrapper, SocialContainer } from "./ContactUsStyle";
import chooseSlice4 from "../../assets/home/chooseSlice4.png"
import clock1b from "../../assets/home/clock1b.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import useSliceAnimation from "../../util/useSliceAnimation";

const ContactUs = () => {

    const socialRef = useRef()
    const largePizzaDrop = useSliceAnimation(socialRef)

    return (
        <Wrapper>
            <Form>
                <NameContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" required />
                    <Subscript>First</Subscript>
                </NameContainer>
                <NameContainer>
                    <Input type="text" />
                    <Subscript>Last</Subscript>
                </NameContainer>
                
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" />
                <Label htmlFor="comment">Comment or Message</Label>
                <TextArea type="textarea" id="comment" style={{"height": "150px", "resize": "vertical"}} />
                <Button>SUBMIT</Button>

            </Form>
            <RightWrapper>
                <Heading>Don't look for love</Heading>
                <SubHeading>look for pizza</SubHeading>
                <Image src={chooseSlice4} alt="slice" style={{ "width": "65px", "marginTop": "10px" }} />
                <MainText>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu.</MainText>
                <MainText>Get in touch on social media:</MainText>
                <SocialWrapper ref={socialRef}>
                <SocialContainer>f </SocialContainer>
                <SocialContainer><TwitterIcon /></SocialContainer>
                <SocialContainer><InstagramIcon/></SocialContainer>
                </SocialWrapper>
            </RightWrapper>
            <LargePizza src={clock1b} alt="pizza slice" largePizzaDrop={largePizzaDrop}/>
        </Wrapper>
    )
}

export default ContactUs