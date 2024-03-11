import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username:"debasish",
    age:"21"
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-1 rounded-xl mb-4'>Tailwind Test</h1>
      <div className='flex justify-center'>
      <Card username="chai aur code" btnText="click me"/>
      <Card username="Debasish"/>
      </div>
      
     
    </>
  )
}

export default App
