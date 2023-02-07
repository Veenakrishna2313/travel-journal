import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <Navbar/>
    </div>
  )
}

export default App
