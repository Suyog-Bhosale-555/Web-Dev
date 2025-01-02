import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  //const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "1234567890"
    let sym = "!@#$%^&*()[]_+-"

    if (number) str += num
    if (symbol) str += sym

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, number, symbol])

  const copyPassword = () =>{
      window.navigator.clipboard.writeText(password) //passwordRef.current.value
  }
  //passwordGeneator()---cannot call function directly because it runs infinite loop so we use useEffect

  useEffect(() => {
    passwordGenerator()
  }, [length, number, symbol,])

  return (
    <div className='felx justify-center px-20 '>
      <div className="bg-zinc-800 rounded-2xl mr-20 ml-20 p-5  text-white" >
        <div>
          <h1 className='font-bold'>PASSWORD GENERATOR</h1>
        </div>
        <div className="mb-6">
          <form action="" className='flex '>
            <input type="text"
              value={password}
              className=" h-10 rounded-lg w-full mr-2 mt-3 text-black accent-blue-400"
              //ref={passwordRef}
              readOnly
            />
            <button className='bg-blue-400 rounded-r-md h-10 px-4 mt-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
            onClick={(e) => {
              e.preventDefault();
              copyPassword()}}
              // onClick={copyPassword} refreshes page everytime copy button clicked so use preventdefault()
            >COPY</button>
          </form>
        </div>
        <div>
          <form action="" className="flex justify-evenly pr-6 pl-6">
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='w-25 cursor-pointer accent-blue-400'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">Length: ({length})</label>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev)
              }}
              className='accent-blue-400'
            />
            <label htmlFor="">Number</label>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setSymbol((prev) => !prev)
              }}
              className='accent-blue-400'
            />
            <label htmlFor="">Symbol</label>
          </form>
        </div>
      </div>

    </div>

  )
}

export default App
