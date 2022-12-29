import { Background, Wrapper, TopWrapper, LeftWrapper, ColorHeading, Heading, SubHeading, Text, Button, RightWrapper, Image, BottomWrapper, IconTextContainer, Icon, CaptionBold, Caption } from "./SliceSliceStyle"
import slice1 from "../../../assets/home/slice1.jpg"
import slice2 from "../../../assets/home/slice2.jpg"
import slice3 from "../../../assets/home/slice3.jpg"
import slice4 from "../../../assets/home/slice4.jpg"
import slice5 from "../../../assets/home/slice5.jpg"
import slice6 from "../../../assets/home/slice6.jpg"

const SliceSlice = () => {

  return (
    <Background>
      <Wrapper>
        <TopWrapper>
          <LeftWrapper>
            <ColorHeading>Slice, slice baby</ColorHeading>
            <Heading>Pizza Magicians</Heading>
            <SubHeading>world-class chefs</SubHeading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
            <Button>Find Out More</Button>
          </LeftWrapper>
          <RightWrapper>
            <Image src={slice1} alt="pizzayola" />
          </RightWrapper>
        </TopWrapper>
        <BottomWrapper>
          <IconTextContainer>
            <Icon src={slice2} alt="fresh" />
            <CaptionBold>Fresh</CaptionBold>
            <Caption>ingridients</Caption>
          </IconTextContainer>
          <IconTextContainer>
            <Icon src={slice3} alt="fresh" />
            <CaptionBold>Top</CaptionBold>
            <Caption>ratings</Caption>
          </IconTextContainer>
          <IconTextContainer>
            <Icon src={slice4} alt="fresh" />
            <CaptionBold>Express</CaptionBold>
            <Caption>delivery</Caption>
          </IconTextContainer>
          <IconTextContainer>
            <Icon src={slice5} alt="fresh" />
            <CaptionBold>Hot</CaptionBold>
            <Caption>always</Caption>
          </IconTextContainer>
          <IconTextContainer>
            <Icon src={slice6} alt="fresh" />
            <CaptionBold>Love</CaptionBold>
            <Caption>all the way</Caption>
          </IconTextContainer>
        </BottomWrapper>
      </Wrapper>
    </Background>
  )
}

export default SliceSlice