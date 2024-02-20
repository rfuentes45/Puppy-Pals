import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppyList)

  
  return (
    <>
      <div>
        {}
      
      </div>
      
    </>
  )
}

export default App
