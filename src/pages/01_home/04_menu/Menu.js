import { Wrapper, TopWrapper, MiddleWrapper, BottomWrapper, ColumnInBottomWrapper, PizzaNameContainer, PizzaLine, Line, Price, ImageTextWrapper, Image, TextWrapper, Heading, SubHeading, Caption, CaptionBold, MenuItemName, MenuItemDescription, Button } from "./MenuStyle";
import chooseSlice1 from "../../../assets/home/chooseSlice1.png"
import chooseSlice3 from "../../../assets/home/chooseSlice3.png"

const Menu = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Heading>The Pizza Menu</Heading>
                <SubHeading>pizza of my heart</SubHeading>
            </TopWrapper>
            <MiddleWrapper>
                <ImageTextWrapper>
                    <Image src={chooseSlice1} />
                    <TextWrapper>
                        <CaptionBold>Pepperoni & Cheese Pizza</CaptionBold>
                        <Caption>Tuesday's Special</Caption>
                        <Caption>$19</Caption>
                        <Caption>2 + 1 gratis</Caption>
                    </TextWrapper>
                </ImageTextWrapper>
                <ImageTextWrapper>
                    <Image src={chooseSlice3} />
                    <TextWrapper>
                        <CaptionBold>Pepperoni & Veggie Pizza</CaptionBold>
                        <Caption>Friday's Special</Caption>
                        <Caption>$29</Caption>
                        <Caption>2 + 1 gratis</Caption>
                    </TextWrapper>
                </ImageTextWrapper>
            </MiddleWrapper>
            <BottomWrapper>
                <ColumnInBottomWrapper>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Margherita</MenuItemName>
                            <Line></Line>
                            <Price>$14.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Capricciosa</MenuItemName>
                            <Line></Line>
                            <Price>$16.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Funghi</MenuItemName>
                            <Line></Line>
                            <Price>$15.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Quattro Stagioni</MenuItemName>
                            <Line></Line>
                            <Price>$24.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                </ColumnInBottomWrapper>
                <ColumnInBottomWrapper>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Marinara</MenuItemName>
                            <Line></Line>
                            <Price>$16.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Pepperoni</MenuItemName>
                            <Line></Line>
                            <Price>$18.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Neapolitan</MenuItemName>
                            <Line></Line>
                            <Price>$22.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                    <PizzaNameContainer>
                        <PizzaLine>
                            <MenuItemName>Chicago</MenuItemName>
                            <Line></Line>
                            <Price>$12.99</Price>
                        </PizzaLine>
                        <MenuItemDescription>Class aptent taciti sociosqu ad litora torquent</MenuItemDescription>
                    </PizzaNameContainer>
                </ColumnInBottomWrapper>
            </BottomWrapper>
            <Button>View The Menu</Button>
        </Wrapper>
    )
}

export default Menu