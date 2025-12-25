import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Component/navbar.jsx'
import Footer from './Component/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
    
     
      
      

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />

        
      </Routes>
      <Footer/>


    </div>
  )
}

export default App