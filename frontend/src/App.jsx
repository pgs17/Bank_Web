import React from 'react'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Component/Navbar/Navbar'
import Landing from './Component/Middle/Landing'
import Footer from './Component/Footer/Footer'
 
const App = () => {
  return (


    <div>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/'  element={<Landing/>} />


          </Routes>
          <Footer />
        </BrowserRouter>
   
    </div>


  )
}

export default App
