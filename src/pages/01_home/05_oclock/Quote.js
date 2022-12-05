import { Quote, Caption, AuthorWrapper, StarWrapper, Star, DotsWrapper, Dot, Image, NameStarWrapper } from "./OclockStyle"
import { FiveStars } from "./FiveStars"
import clock2 from "../../../assets/home/clock2.jpg"
import clock3 from "../../../assets/home/clock3.jpg"
import clock4 from "../../../assets/home/clock4.jpg"

export const QuoteOne = () => {
    return (
        <>
            <Quote style={{"fontSize": "4.5rem"}} />
            <Caption>Love fades. Pizza is forever</Caption>
            <AuthorWrapper>
                <Image src={clock2} alt="author one" />
                <NameStarWrapper>
                    <Caption>Ariana Poppins</Caption>
                    <FiveStars />
                </NameStarWrapper>
            </AuthorWrapper>
        </>
    )
}

export const QuoteTwo = () => {
    return (
        <>
            <Quote style={{"fontSize": "4.5rem"}} />
            <Caption>A slice a day keeps the sad away</Caption>
            <AuthorWrapper>
                <Image src={clock3} alt="author one" />
                <NameStarWrapper>
                    <Caption>Roger Dunham</Caption>
                    <FiveStars />
                </NameStarWrapper>
            </AuthorWrapper>
        </>
    )
}

export const QuoteThree = () => {
    return (
        <>
            <Quote style={{"fontSize": "4.5rem"}} />
            <Caption>Pizza is the only love triangle I want</Caption>
            <AuthorWrapper>
                <Image src={clock4} alt="author one" />
                <NameStarWrapper>
                    <Caption>Mark Holloway</Caption>
                    <FiveStars />
                </NameStarWrapper>
            </AuthorWrapper>
        </>
    )
}