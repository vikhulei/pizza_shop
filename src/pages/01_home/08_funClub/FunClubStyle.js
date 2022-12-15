import styled from "styled-components";
import { ButtonStyled, CaptionBoldStyled, CaptionStyled, HeadingStyled, SubHeadingStyled, WrapperStyled } from "../../../components/ui/StyledComponents";
import { colors } from "../../../components/Colors";
import pizza from "../../../assets/home/gallery/large/pizza6_large.jpg"

const {background, light} = colors

const WideWrapper = styled.div `
`
// background: url(${background});

const Wrapper = styled(WrapperStyled)`
    height: 530px;
    padding: 100px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    algn-items: center;
`

const TopWrapper = styled.div `
    text-align: center;
`

const Heading = styled(HeadingStyled) `

`

const SubHeading = styled(SubHeadingStyled) `

`

const BottomWrapper = styled.div `
    position: relative;
    width: 100vw;
    height: 230px;
    background: url(${pizza});
    background-size: cover;
    background-position: center;
`

const Image = styled.img `
    width: 100%;
    object-fit: cover;
`

const CounterWrapper = styled.div `
    position: relative;
    width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
    margin: 0 auto;
`

const CounterTextContainer = styled.div `
    text-align: center;
    height: fit-content;
    color: white;
`


const HeadingCounter = styled(HeadingStyled) `
    font-size: 4rem;
    margin-bottom: 20px;
`


const CaptionCounter = styled(CaptionStyled) `

`

export {WideWrapper, Wrapper, TopWrapper, BottomWrapper, Image, Heading, SubHeading, CounterWrapper, CounterTextContainer, HeadingCounter, CaptionCounter }