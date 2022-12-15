import { Form, NameContainer, Input, Label, Subscript, Button, Wrapper, RightWrapper, Image, Heading, SubHeading, MainText, LargePizza, SocialWrapper, SocialContainer } from "./ContactUsStyle";
import chooseSlice4 from "../../assets/home/chooseSlice4.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
    return (
        <Wrapper>
            <Form>
                <NameContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" />
                    <Subscript>First</Subscript>
                </NameContainer>
                <NameContainer>
                    <Input type="text" />
                    <Subscript>Last</Subscript>
                </NameContainer>
                
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" />
                <Label htmlFor="comment">Comment or Message</Label>
                <Input type="textarea" id="comment" style={{"height": "150px", "resize": "vertical"}} />
                <Button>SUBMIT</Button>

            </Form>
            <RightWrapper>
                <Heading>Don't look for love</Heading>
                <SubHeading>look for pizza</SubHeading>
                <Image src={chooseSlice4} alt="slice" style={{ "width": "65px", "marginTop": "10px" }} />
                <MainText>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu.</MainText>
                <MainText>Get in touch on social media:</MainText>
                <SocialWrapper>
                <SocialContainer>f </SocialContainer>
                <SocialContainer><TwitterIcon /></SocialContainer>
                <SocialContainer><InstagramIcon/></SocialContainer>
                </SocialWrapper>
            </RightWrapper>

        </Wrapper>
    )
}

export default ContactUs