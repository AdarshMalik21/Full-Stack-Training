import { useState } from 'react'
import Board from './utils/Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='text-3xl'>Hello world</div> */}
      <Board />
      
    </>
  )
}

export default App
