import { useRef } from "react";
import { WideWrapper, Wrapper, TopWrapper, BottomWrapper, Heading, SubHeading, Image, CounterWrapper, CounterTextContainer, HeadingCounter, CaptionCounter } from "./FanClubStyle";
import chooseSlice4 from "../../../assets/home/chooseSlice4.png"
import useCounter from "../../../util/useCounter"
import useSliceAnimation from "../../../util/useSliceAnimation";


const FanClub = () => {

    const counterRef = useRef()
    const startCounter = true
    // const startCounter = useSliceAnimation(counterRef)
    const [counter1, counter2, counter3] = useCounter(startCounter)

    return (
        <WideWrapper>
            <Wrapper>
                <TopWrapper>
                    <Heading>Join Our Pizza Fan Club</Heading>
                    <SubHeading>the best pizza place in town</SubHeading>
                    <Image src={chooseSlice4} style={{ "maxWidth": "65px" }} alt="pizza slice" />
                </TopWrapper>
                <BottomWrapper>
                    <CounterWrapper ref={counterRef}>
                        <CounterTextContainer>
                            <HeadingCounter>{counter1}+</HeadingCounter>
                            <CaptionCounter>Visitors per day</CaptionCounter>
                        </CounterTextContainer>
                        <CounterTextContainer>
                            <HeadingCounter>{counter2}</HeadingCounter>
                            <CaptionCounter>Years in business</CaptionCounter>
                        </CounterTextContainer>
                        <CounterTextContainer>
                            <HeadingCounter>{counter3}+</HeadingCounter>
                            <CaptionCounter>Menu items</CaptionCounter>
                        </CounterTextContainer>
                    </CounterWrapper>
                </BottomWrapper>
            </Wrapper>
        </WideWrapper>
    )
}

export default FanClub