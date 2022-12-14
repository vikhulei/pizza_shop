import { Background, Wrapper, CallToActionWrapper, PizzaMiaWrapper, Heading, SubHeading, OrderButton, IconsTextsWrapper, IconTextContainer,  IconWrapper, Icon, TextWrapper, IconHeading, IconSubHeading, PizzaImageContainer, PizzaImage } from "./PizzaMiaStyle"
import pizza_mia1 from "../../../assets/home/pizza_mia1.png"
import catIcon from "../../../assets/home/pizza_mia2.jpg"
import cheeseIcon from "../../../assets/home/pizza_mia3.jpg"

const PizzaMia = () => {
  return (
    <Background>
      <Wrapper>
        <CallToActionWrapper>
          <PizzaMiaWrapper>
            <Heading>Pizza Mia</Heading>
            <SubHeading>Your favourite pizza restaurant</SubHeading>
            <OrderButton>
              Order Now
            </OrderButton>
          </PizzaMiaWrapper>
          <IconsTextsWrapper>
            <IconTextContainer>
              <IconWrapper>
                <Icon src={catIcon} alt="cat icon" />
              </IconWrapper>
              <TextWrapper>
                <IconHeading>Calories</IconHeading>
                <IconSubHeading>
                  Who's counting?
                </IconSubHeading>
              </TextWrapper>
            </IconTextContainer>
            <IconTextContainer>
              <IconWrapper>
                <Icon src={cheeseIcon} alt="cheese icon" />
              </IconWrapper>
              <TextWrapper>
                <IconHeading>Cheese</IconHeading>
                <IconSubHeading>
                  Never enough
                </IconSubHeading>
              </TextWrapper>
            </IconTextContainer>
          </IconsTextsWrapper>
        </CallToActionWrapper>
        <PizzaImageContainer>
          <PizzaImage src={pizza_mia1} alt="pizza mia" />
        </PizzaImageContainer>
      </Wrapper>
    </Background>
  )
}

export default PizzaMia