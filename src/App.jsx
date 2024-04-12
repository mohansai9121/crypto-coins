//import { useState } from 'react'
import './App.css'
//import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Coin from './pages/Coin'
import Error from './pages/Error'

const App = () => {
  return(
    <div>
      <div  className="heading">
          Crypto Coins
        </div>
        <hr></hr>
        <div style={{backgroundColor:'#C0F3AB', overflow:'hidden'}}><p className='scrolling'>Know about crypto coins and prices</p></div>
        <hr></hr><br></br>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Coin/>}/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
