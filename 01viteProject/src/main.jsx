import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h1>Custom app | Debasish</h1>
    </div>
  )
}
// const reactElement = {
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children :"Click me to visit Google"
// }


const AnotherElement = (<a href='https://google.com' target='_blank'>Visit google</a>)

const anotherUser = "chai aur code"

const ReactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click me to visit google",
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Myapp />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //AnotherElement
//   ReactElement
// )