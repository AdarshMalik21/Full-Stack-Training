import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    if(count >= 10) return;
    setCount((prev)=>prev +1);
    setCount((prev)=>prev +1);
  }
  function decrement(){
    if(count <= 0) return;
    setCount(count -1);
  }
  return (
    <>
      <div>Counter App</div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
