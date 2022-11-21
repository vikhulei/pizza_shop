import { useState } from "react"


const Counter = () => {

const [counter1, setCounter1] = useState(1)
    
let i = 1
const runCounter1 = () => {
    i = i + 1
    setTimeout(() => {
      setCounter1(prev => prev + 1)
      if(i <= 10) {
        console.log(i)
        runCounter1()
      }
    }, 1000)
  }
  return (
    <div>

    </div>
  )
}