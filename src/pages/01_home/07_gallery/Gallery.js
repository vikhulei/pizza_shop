import { useState, useEffect } from "react"
import { Background, Wrapper, TopWrapper, ColorHeading, Heading, SubHeading, GalleryWrapper, ImageContainer, Image, ImageSmallPizza, LargeImageContainer, LargeImage, ArrowContainer, ArrowBack, ArrowForward, ArrowForClick, Button } from "./GalleryStyle"
import { pizzaImages } from "./components/pizzaImages"

const Gallery = () => {

  const [showImage, setShowImage] = useState(false)
  const [imageId, setImageId] = useState()

  const showLargeImage = (e) => {
    setImageId(e.target.id)
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