import { useState, useEffect } from "react"

const useSliceAnimation = ({startAnimate, compsRef}) => {

    const [animateSlices, setAnimateSlices] = useState(false)

    const detectSlice = () => {
        const topOfSlice = startAnimate.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        const showingPoint = Math.floor((windowHeight - topOfSlice)/windowHeight*100)
        if (showingPoint > 30) {
            if(!animateSlices) {
                setAnimateSlices(true)
            }
        }
    }

    useEffect(() => {
        const componentsWrapper = compsRef.compsRef.current        
        componentsWrapper.addEventListener("scroll", detectSlice)
        return () => componentsWrapper.removeEventListener("scroll", detectSlice)
    }, [])

    return animateSlices
}

export default useSliceAnimation
