import { useState, useEffect } from "react"
import { Background, Wrapper, TopWrapper, ColorHeading, Heading, SubHeading, GalleryWrapper, ImageContainer, Image, ImagePizza, LargeImageContainer, LargeImage, ArrowContainer, ArrowBack, ArrowForward, ArrowForClick, Button } from "./GalleryStyle"
import pizza1_small from "../../../assets/home/gallery/small/pizza1_small.jpg"
import pizza2_small from "../../../assets/home/gallery/small/pizza2_small.jpg"
import pizza3_small from "../../../assets/home/gallery/small/pizza3_small.jpg"
import pizza4_small from "../../../assets/home/gallery/small/pizza4_small.jpg"
import pizza5_small from "../../../assets/home/gallery/small/pizza5_small.jpg"
import pizza6_small from "../../../assets/home/gallery/small/pizza6_small.jpg"
import pizza7_small from "../../../assets/home/gallery/small/pizza7_small.jpg"
import pizza8_small from "../../../assets/home/gallery/small/pizza8_small.jpg"
import pizza1_large from "../../../assets/home/gallery/large/pizza1_large.jpg"
import pizza2_large from "../../../assets/home/gallery/large/pizza2_large.jpg"
import pizza3_large from "../../../assets/home/gallery/large/pizza3_large.jpg"
import pizza4_large from "../../../assets/home/gallery/large/pizza4_large.jpg"
import pizza5_large from "../../../assets/home/gallery/large/pizza5_large.jpg"
import pizza6_large from "../../../assets/home/gallery/large/pizza6_large.jpg"
import pizza7_large from "../../../assets/home/gallery/large/pizza7_large.jpg"
import pizza8_large from "../../../assets/home/gallery/large/pizza8_large.jpg"

const Gallery = () => {

  const [showImage, setShowImage] = useState(false)
  const [imageId, setImageId] = useState()
  const [imageName, setImageName] = useState()


  const carusel = [
    { imName: "pizza1_large", imId: pizza1_large },
    { imName: "pizza2_large", imId: pizza2_large },
    { imName: "pizza3_large", imId: pizza3_large },
    { imName: "pizza4_large", imId: pizza4_large },
    { imName: "pizza5_large", imId: pizza5_large },
    { imName: "pizza6_large", imId: pizza6_large },
    { imName: "pizza7_large", imId: pizza7_large },
    { imName: "pizza8_large", imId: pizza8_large }
  ]

  const showLargeImage = (e) => {
    let idImage = e.target.id
    let nameImage = e.target.attributes.name.nodeValue
    setImageName(nameImage)
    setImageId(idImage)
    setShowImage(true)
  }

  const hideLargeImage = (e) => {
    if (e.target.id !== "arrowBack" && e.target.id !== "arrowForward") {
      setShowImage(false)
    }
  }

  const caruselBack = () => {
    let currentImageIndex = carusel.map(val => val.imName).indexOf(imageName)
    let newImageIndex
    if (currentImageIndex === 0) {
      newImageIndex = currentImageIndex + 7
    } else {
      newImageIndex = currentImageIndex - 1
    }
    let newImageId = carusel[newImageIndex].imId
    let newImageName = carusel[newImageIndex].imName
    setImageId(newImageId)
    setImageName(newImageName)
  }

  const caruselForward = () => {
    let currentImageIndex = carusel.map(val => val.imName).indexOf(imageName)
    let newImageIndex
    if (currentImageIndex === 7) {
      newImageIndex = currentImageIndex - 7
    } else {
      newImageIndex = currentImageIndex + 1
    }
    let newImageId = carusel[newImageIndex].imId
    let newImageName = carusel[newImageIndex].imName
    setImageId(newImageId)
    setImageName(newImageName)
  }



  return (
    <Background>
      <Wrapper>
        <TopWrapper>
          <ColorHeading>Feast your eyes</ColorHeading>
          <Heading>Delicious Pizza Gallery</Heading>
          <SubHeading>watch now, order later</SubHeading>
        </TopWrapper>
        <GalleryWrapper>
          <ImageContainer>
            <ImagePizza id={pizza1_large} name="pizza1_large" onClick={showLargeImage} />
            <Image src={pizza1_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza2_large} name="pizza2_large" onClick={showLargeImage} />
            <Image src={pizza2_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza3_large} 
            name="pizza3_large"
            onClick={showLargeImage} />
            <Image src={pizza3_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza4_large}
            name="pizza4_large"
            onClick={showLargeImage} />
            <Image src={pizza4_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza5_large}
            name="pizza5_large"
            onClick={showLargeImage} />
            <Image src={pizza5_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza6_large}
            name="pizza6_large"
            onClick={showLargeImage} />
            <Image src={pizza6_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza7_large}
            name="pizza7_large"
            onClick={showLargeImage} />
            <Image src={pizza7_small} alt="pizza image" />
          </ImageContainer>
          <ImageContainer>
            <ImagePizza id={pizza8_large}
            name="pizza8_large"
            onClick={showLargeImage} />
            <Image src={pizza8_small} alt="pizza image" />
          </ImageContainer>
        </GalleryWrapper>

        {showImage && <LargeImageContainer onClick={hideLargeImage}>
          <ArrowContainer>
            <ArrowBack style={{ "fontSize": "3rem" }} />
            <ArrowForClick id="arrowBack"
            onClick={caruselBack} />
          </ArrowContainer>
          <LargeImage src={imageId} />
          <ArrowContainer>
            <ArrowForward style={{ "fontSize": "3rem" }} />
            <ArrowForClick id="arrowForward"
            onClick={caruselForward} />
          </ArrowContainer>
        </LargeImageContainer>}

        <Button>Show Me More Pizza</Button>
      </Wrapper>
    </Background>
  )
}

export default Gallery