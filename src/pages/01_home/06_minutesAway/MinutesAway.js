import { Wrapper, TopWrapper, BottomWrapper, ImageTextWrapper, Image, Heading, SubHeading, Caption, CaptionBold } from "./MinutesAwayStyle";
import chooseSlice4 from "../../../assets/home/chooseSlice4.png"
import minutes1 from "../../../assets/home/minutes1.jpg"
import minutes2 from "../../../assets/home/minutes2.jpg"
import minutes3 from "../../../assets/home/minutes3.jpg"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const MinutesAway = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Heading>Just 45 Minutes Away</Heading>
                <SubHeading>hot stuff at your doorstep</SubHeading>
                <Image src={chooseSlice4} alt="slice" style={{"width": "65px", "marginTop": "10px"}} />
            </TopWrapper>
            <BottomWrapper>
                <ImageTextWrapper>
                    <Image src={minutes1} />
                    <CaptionBold>Order Pizza</CaptionBold>
                    <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</Caption>
                </ImageTextWrapper>
                <ImageTextWrapper>
                    <Image src={minutes2} />
                    <CaptionBold>Expect Our Vehicle</CaptionBold>
                    <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</Caption>
                </ImageTextWrapper>
                <ImageTextWrapper>
                    <Image src={minutes3}/>
                    <CaptionBold>Enjoy Your Pizza</CaptionBold>
                    <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</Caption>
                </ImageTextWrapper>
            </BottomWrapper>
        </Wrapper>
    )
}

export default MinutesAway