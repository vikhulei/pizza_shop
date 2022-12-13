import { useState, useEffect } from "react"


const useCounter = (startCounter) => {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
    
  let i = 0
  const runCounter1 = () => {
      i = i + 24
      setTimeout(() => {
        setCounter1(prev => prev + 24)
        if(i < 3000) {
          runCounter1()
        }
      }, 15)
    }

  let j = 0
  const runCounter2 = () => {
      j = j + 1
      setTimeout(() => {
        setCounter2(prev => prev + 1)
        if(j < 15) {
          runCounter2()
        }
      }, 130)
    }

  let k = 0
  const runCounter3 = () => {
      k = k + 1
      setTimeout(() => {
        setCounter3(prev => prev + 1)
        if(k < 30) {
          runCounter3()
        }
      }, 70)
    }

    useEffect(() => {
      if(startCounter) {
        runCounter1()
        runCounter2()
        runCounter3()
      }
    }, [startCounter])

  return [counter1.toLocaleString(), counter2, counter3]
}

export default useCounter