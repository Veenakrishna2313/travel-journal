import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/card'
import data from './data.js'
import './App.css'

function App() {
 
  const card=data.map((item)=><Card key={item.startDate} item={item}/>)

  return (
    <div className="main-container">
      <Navbar/>
      <div className='container'>
      {card}
      </div>
     </div>
  )
}

export default App
