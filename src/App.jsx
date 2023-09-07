import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from '../Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Explore React core concepts 6 recap</h2>
      <ol>
        <li>Component</li>
        <li>Jsx</li>
        <li>props</li>
        <li>Event Handler</li>
        <li>UseState</li>
        <li>useEffect</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
