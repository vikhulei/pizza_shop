import { useEffect, useRef } from "react"
import { Background, Wrapper, LeftSideWrapper, ColorHeading, Heading, SubHeading, QuoteBox, QuoteWrapper, QuoteContainer, DotsWrapper, Dot, Button, RightSideWrapper, PizzaSliceTop, PizzaSliceRight, PizzaSliceBottom } from "./OclockStyle"
import { QuoteOne, QuoteTwo, QuoteThree } from "./components/Quote"
import clock1a from "../../../assets/home/clock1a.png"
import clock1b from "../../../assets/home/clock1b.png"
import clock1c from "../../../assets/home/clock1c.png"
import useSliceAnimation from "../../../util/useSliceAnimation"


const OClock = (compsRef) => {

  const quoteContainer = useRef()
  const quoteBox = useRef()
  const quoteOne = useRef()
  const quoteTwo = useRef()
  const quoteThree = useRef()
  const dotOne = useRef()
  const dotTwo = useRef()
  const dotThree = useRef()
  const startAnimate = useRef(null)

  const showSlice = useSliceAnimation({startAnimate, compsRef})

  const dotsColoring = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
          const rightQuote = entry.target.id
          if(entry.isIntersecting) {

            switch(rightQuote) {
              case "qOne":
                dotOne.current.style.backgroundColor = "red"
                dotTwo.current.style.backgroundColor = "yellow"
                dotThree.current.style.backgroundColor = "yellow"
                break
              case "qTwo":
                dotOne.current.style.backgroundColor = "yellow"
                dotTwo.current.style.backgroundColor = "red"
                dotThree.current.style.backgroundColor = "yellow"
                break
              case "qThree":
                dotOne.current.style.backgroundColor = "yellow"
                dotTwo.current.style.backgroundColor = "yellow"
                dotThree.current.style.backgroundColor = "red"
                break
            }  
          }
        }
      )
    },
    )
    observer.observe(quoteOne.current)
    observer.observe(quoteTwo.current)
    observer.observe(quoteThree.current)
  }

  const scrollToRef = (e) => {
    const pixels = e.target.id
    quoteContainer.current.style.animation = "none"
    quoteContainer.current.style.left = 
    `${pixels}px`
  }

useEffect(() => {
  dotsColoring()
}, [])

  return (
    <Background>
      <Wrapper>
        <LeftSideWrapper>
          <ColorHeading>It's pizza o'clock</ColorHeading>
          <Heading>We're Pizza</Heading>
          <SubHeading>& we can make everyone happy</SubHeading>
          <QuoteBox ref={quoteBox}>
            <QuoteContainer ref={quoteContainer}>
          <QuoteWrapper id="qOne" ref={quoteOne}>
            <QuoteOne />
          </QuoteWrapper>
          <QuoteWrapper id="qTwo" ref={quoteTwo}>
            <QuoteTwo />
          </QuoteWrapper>
          <QuoteWrapper id="qThree" ref={quoteThree}>
            <QuoteThree />
          </QuoteWrapper>
          </QuoteContainer>
          </QuoteBox>
          <DotsWrapper>
            <Dot ref={dotOne}  id="-10" onClick={scrollToRef}></Dot>
            <Dot ref={dotTwo} id="-1020" onClick={scrollToRef}></Dot>
            <Dot ref={dotThree} id="-2030" onClick={scrollToRef}></Dot>
          </DotsWrapper>
          <Button>Make a Reservation</Button>
        </LeftSideWrapper>
        <RightSideWrapper ref={startAnimate}>
          <PizzaSliceTop showSlice={showSlice} src={clock1a} alt="pizza slice"/>
          <PizzaSliceRight showSlice={showSlice} src={clock1b} alt="pizza slice"/>
          <PizzaSliceBottom showSlice={showSlice} src={clock1c} alt="pizza slice"/>
        </RightSideWrapper>
      </Wrapper>
    </Background>
  )
}

export default OClock