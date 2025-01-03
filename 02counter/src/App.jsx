import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(20);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value:- ( {counter} )</h2>

      <button onClick={addValue}> Add Value</button>
      <br />
      <button onClick={decreaseValue}> Decrease Value</button>
    </>
  )




}

export default App
