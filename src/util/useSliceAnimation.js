import { useState, useEffect } from "react"

const useSliceAnimation = (sliceTop) => {
    const [animateSlices, setAnimateSlices] = useState(false)

    const detectSlice = () => {
        const topOfSlice = sliceTop.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        const showingPoint = Math.floor((windowHeight - topOfSlice)/windowHeight*100)
        if (showingPoint > 30) {
            if(!animateSlices) {
                setAnimateSlices(true)
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", detectSlice)
        return () => window.removeEventListener("scroll", detectSlice)
    }, [])

    return animateSlices
}

export default useSliceAnimation
