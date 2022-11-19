import { Wrapper, TopWrapper, BottomWrapper, ImageTextWrapper, Image, Heading, SubHeading, Caption, CaptionBold, Button } from "./ChooseSliceStyle";
import chooseSlice1 from "../../../assets/home/chooseSlice1.png"
import chooseSlice2 from "../../../assets/home/chooseSlice2.png"
import chooseSlice3 from "../../../assets/home/chooseSlice3.png"
import chooseSlice4 from "../../../assets/home/chooseSlice4.png"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const ChooseSlice = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Heading>Choose Your Slice</Heading>
                <SubHeading>popular pizza flavors</SubHeading>
                <Image src={chooseSlice4} style={{"maxWidth": "65px"}} alt="pizza slice" />
            </TopWrapper>
            <BottomWrapper>
                <ImageTextWrapper>
                    <Image src={chooseSlice1} alt="Pizza image" />
                    <div>
                    <CaptionBold>Traditional Pizza #1</CaptionBold>
                    <Caption>Peperoni & cheese</Caption>
                    </div>
                    <CaptionBold>$19.00</CaptionBold>
                    <Button>
                        <ArrowCircleRightIcon style={{ "height": "20px" }} />
                        Order
                    </Button>
                </ImageTextWrapper>
                <ImageTextWrapper>
                    <Image src={chooseSlice2} alt="Pizza image" />
                    <div>
                    <CaptionBold>Traditional Pizza #2</CaptionBold>
                    <Caption>Ham & double cheese</Caption>
                    </div>
                    <CaptionBold>$25.00</CaptionBold>
                    <Button>
                        <ArrowCircleRightIcon style={{ "height": "20px" }} />
                        Order
                    </Button>
                </ImageTextWrapper>
                <ImageTextWrapper>
                    <Image src={chooseSlice3} alt="Pizza image" />
                    <dfiv>
                    <CaptionBold>Traditional Pizza #3</CaptionBold>
                    <Caption>Peperoni & veggies</Caption>
                    </dfiv>
                    <CaptionBold>$29.00</CaptionBold>
                    <Button>
                        <ArrowCircleRightIcon style={{ "height": "20px" }} />
                        Order
                    </Button>
                </ImageTextWrapper>
            </BottomWrapper>
        </Wrapper>
    )
}

export default ChooseSlice