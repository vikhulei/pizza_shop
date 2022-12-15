import { Background, Wrapper, TextImageWrapper, TextWrapper, Image, CaptionBold, Caption } from "./FooterWideStyle"
import footer1 from "../../assets/home/footer1.jpg"
import footer2 from "../../assets/home/footer2.jpg"
import footer3 from "../../assets/home/footer3.jpg"

const FooterWide = () => {
    return (
        <Background>
            <Wrapper>
                <TextImageWrapper>
                    <Image src={footer1} alt="handset" />
                    <TextWrapper>
                        <CaptionBold>Call us</CaptionBold>
                        <Caption>+111 22-33-444</Caption>
                    </TextWrapper>
                </TextImageWrapper>
                <TextImageWrapper>
                    <Image src={footer2} alt="letter" />
                    <TextWrapper>
                        <CaptionBold>Write to us</CaptionBold>
                        <Caption>pizza@youroceanwpsite.com</Caption>
                    </TextWrapper>
                </TextImageWrapper>
                <TextImageWrapper>
                    <Image src={footer3} alt="calculator" />
                    <TextWrapper>
                        <CaptionBold>Pizza hours</CaptionBold>
                        <Caption>Mon - Sat: 8AM to 10PM</Caption>
                    </TextWrapper>
                </TextImageWrapper>
            </Wrapper>
        </Background>
    )
}

export default FooterWide