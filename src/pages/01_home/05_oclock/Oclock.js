import { useState, useEffect, useRef, useMemo } from "react"
import { Background, Wrapper, LeftSideWrapper, ColorHeading, Heading, SubHeading, QuoteBox, QuoteWrapper, QuoteContainer, Caption, AuthorWrapper, StarWrapper, DotsWrapper, Dot, Dot2, Dot3, Image } from "./OclockStyle"
import { FiveStars } from "./FiveStars"
import clock1a from "../../../assets/home/clock1a.png"
import clock1b from "../../../assets/home/clock1b.png"
import clock1c from "../../../assets/home/clock1c.png"


const OClock = () => {

  const quoteContainer = useRef()
  const quoteBox = useRef()
  const quoteOne = useRef()
  const quoteTwo = useRef()
  const quoteThree = useRef()
  const dotOne = useRef()
  const dotTwo = useRef()
  const dotThree = useRef()

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
            <Caption>PIZZA #1</Caption>
            <Caption>Pizza is the only love triangle I want</Caption>
          </QuoteWrapper>
          <QuoteWrapper id="qTwo" ref={quoteTwo}>
            <Caption>PIZZA #2</Caption>
            <Caption>Pizza is the only love triangle I want</Caption>
          </QuoteWrapper>
          <QuoteWrapper id="qThree" ref={quoteThree}>
            <Caption>PIZZA #3</Caption>
            <Caption>Pizza is the only love triangle I want</Caption>
            {/* <GradeIcon style={{"color": "yellow", "size": "8px"}}/> */}
            <FiveStars />
          </QuoteWrapper>
          </QuoteContainer>
          </QuoteBox>
          <DotsWrapper>
            <Dot ref={dotOne}  id="-10" onClick={scrollToRef}></Dot>
            <Dot ref={dotTwo} id="-1020" onClick={scrollToRef}></Dot>
            <Dot ref={dotThree} id="-2030" onClick={scrollToRef}></Dot>
          </DotsWrapper>
        </LeftSideWrapper>
      </Wrapper>
    </Background>
  )
}

export default OClock


//   const [quoteOne, setQuoteOne] = useState("not yet")
//   const [dotOne, setDotOne] = useState(true)
//   const [test, setTest] = useState(false)

//   const colorRef = useRef()
//   const quoteOneRef = useRef()
//   const quoteBox = useRef()

//   const start = () => {
//     setInterval(() => {
//       // console.log("hello")
//     }, 1000)
//   }

// const observer = useMemo(
//   () => new IntersectionObserver(([entry]) => setDotOne(entry.isIntersecting)
//     ),
//     [],
// )

  // const trigger = () => {
  //   const pizzaOne = quoteOneRef.current
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if(entry.isIntersecting) {
  //           setQuoteOne("It's pizza o'clock")
  //         } else {
  //           setQuoteOne("not yet")
  //           }
  //         })
  //       })
        
  //     }

      // console.log(entry.boundingClientRect.x)
  
  // entry.isIntersecting ? console.log(entry.boundingClientRect.x) : console.log("false")

    // It's pizza o'clock

  // useEffect(() => {
  //   observer.observe(quoteOneRef.current)
  // }, [quoteOneRef, observer])


      // const toLeft = quoteContainer.current.getBoundingClientRect().x * -1 + 20
    // quoteContainer.current.style.left =
    // `${pixels}px`
    // console.log(toLeft)
    // const toLeft = quoteContainer.current.getBoundingClientRect().x * -1 + 20

    // const pos = quoteContainer.current.getBoundingClientRect().x
    // quoteContainer.current.addEventListener("webkitAnimationIteration", () => console.log(pos))


              // switch(entry.target) {
          //   case qOne :
          //   console.log("one")
          //   break
          //   case qTwo :
          //   console.log("two")
          //   break
          //   case qThree :
          //   console.log("three")
          //   break
          // }

          // if(entry.isIntersecting) {
          //   console.log(entry.target)
          //   console.log(quoteOne.current)
          // }


              // const observerTwo = new IntersectionObserver(entries => {
    //   entries.forEach(
    //     entry => {
    //       console.log("two")
    //     }
    //   )
    // })

    // const observerThree = new IntersectionObserver(entries => {
    //   entries.forEach(
    //     entry => {
    //       console.log("three")
    //     }
    //   )
    // })