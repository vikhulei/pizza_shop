import { useState, useEffect } from "react"
import { Background, Wrapper, TopWrapper, ColorHeading, Heading, SubHeading, GalleryWrapper, ImageContainer, Image, ImageSmallPizza, LargeImageContainer, LargeImage, ArrowContainer, ArrowBack, ArrowForward, ArrowForClick, Button } from "./GalleryStyle"
import { pizzaImages } from "./components/pizzaImages"

const Gallery = () => {

  const [showImage, setShowImage] = useState(false)
  const [imageId, setImageId] = useState()

  const showLargeImage = (e) => {
    let idImage = e.target.id
    setImageId(idImage)
    setShowImage(true)
  }

  const hideLargeImage = (e) => {
    if (e.target.id !== "arrowBack" && e.target.id !== "arrowForward") {
      setShowImage(false)
    }
  }

  const carusel = (e) => {
    let currentImageIndex = pizzaImages.map(val => val.large).indexOf(imageId)
    let newImageIndex
    if (e.target.id = "arrowBack") {
      newImageIndex = (currentImageIndex === 0) ? (pizzaImages.length - 1) : (currentImageIndex - 1)
    } else if (e.target.id = "arrowForward") {
      newImageIndex = (currentImageIndex === (pizzaImages.length - 1)) ? 0 : (currentImageIndex + 1)
    }
    setImageId(pizzaImages[newImageIndex].large)
  }

  useEffect(() => {
    window.addEventListener("scroll", hideLargeImage)
    return () => window.removeEventListener("scroll", hideLargeImage)
  }, [])

  return (
    <Background>
      <Wrapper>
        <TopWrapper>
          <ColorHeading>Feast your eyes</ColorHeading>
          <Heading>Delicious Pizza Gallery</Heading>
          <SubHeading>watch now, order later</SubHeading>
        </TopWrapper>
        <GalleryWrapper>
          {
            pizzaImages.map((val, idx) =>
            (
              <ImageContainer key={idx}>
                <ImageSmallPizza id={val.large} onClick={showLargeImage} />
                <Image src={val.small} />
              </ImageContainer>
            )
            )
          }
        </GalleryWrapper>
        {showImage && <LargeImageContainer showImage={showImage} onClick={hideLargeImage}>
          <ArrowContainer>
            <ArrowBack style={{ "fontSize": "3rem" }} />
            <ArrowForClick id="arrowBack"
              onClick={carusel} />
          </ArrowContainer>
          <LargeImage src={imageId} />
          <ArrowContainer>
            <ArrowForward style={{ "fontSize": "3rem" }} />
            <ArrowForClick id="arrowForward"
              onClick={carusel} />
          </ArrowContainer>
        </LargeImageContainer>}

        <Button>Show Me More Pizza</Button>
      </Wrapper>
    </Background>
  )
}

export default Gallery



{/* <ImageContainer>
            <ImageSmallPizza id={pizza1_large} name="pizza1_large" onClick={showLargeImage} />
            <Image src={pizza1_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza2_large} name="pizza2_large" onClick={showLargeImage} />
            <Image src={pizza2_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza3_large} 
            name="pizza3_large"
            onClick={showLargeImage} />
            <Image src={pizza3_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza4_large}
            name="pizza4_large"
            onClick={showLargeImage} />
            <Image src={pizza4_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza5_large}
            name="pizza5_large"
            onClick={showLargeImage} />
            <Image src={pizza5_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza6_large}
            name="pizza6_large"
            onClick={showLargeImage} />
            <Image src={pizza6_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza7_large}
            name="pizza7_large"
            onClick={showLargeImage} />
            <Image src={pizza7_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImageSmallPizza id={pizza8_large}
            name="pizza8_large"
            onClick={showLargeImage} />
            <Image src={pizza8_small} alt="pizza image" />
          </ImageContainer> */}


  // const carusel = [
  //   { imName: "pizza1_large", imId: pizza1_large },
  //   { imName: "pizza2_large", imId: pizza2_large },
  //   { imName: "pizza3_large", imId: pizza3_large },
  //   { imName: "pizza4_large", imId: pizza4_large },
  //   { imName: "pizza5_large", imId: pizza5_large },
  //   { imName: "pizza6_large", imId: pizza6_large },
  //   { imName: "pizza7_large", imId: pizza7_large },
  //   { imName: "pizza8_large", imId: pizza8_large }
  // ]


  // const [pizza1_small, pizza2_small, pizza3_small, pizza4_small, pizza5_small, pizza6_small, pizza7_small, pizza8_small] = pizzas



    // const caruselBack = () => {
  //   let currentImageIndex = pizzas.map(val => val.largeName).indexOf(imageName)
  //   let newImageIndex
  //   if (currentImageIndex === 0) {
  //     newImageIndex = currentImageIndex + 7
  //   } else {
  //     newImageIndex = currentImageIndex - 1
  //   }
  //   let newImageId = pizzas[newImageIndex].large
  //   let newImageName = pizzas[newImageIndex].largeName
  //   setImageId(newImageId)
  //   setImageName(newImageName)
  // }