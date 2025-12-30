import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Component/navbar.jsx'
import Footer from './Component/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import "react-toastify/dist/ReactToastify.css";
import Heading from './Component/Heading.jsx'
import Card from './Component/Card.jsx'
import Heading2 from './Component/Heading2.jsx'
import Testimonial from './Component/Testimonial.jsx'


const App = () => {


  const products = [
  {
    image: "/public/image/calf-starter.webp",
    title: "Calf Starter",
    description: "Strong early growth and immunity",
  },
  {
    image: "/public/image/Calf-Growth-Booster.webp",
    title: "Calf Growth Booster",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/Heifer-Prime-Care.webp",
    title: "Heifer Prime Care",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/Ultimate-Dry-Care.webp",
    title: "Ultimate Dry Care",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/transition-wellness-pre-20.webp",
    title: "Transition Wellness (Pre-20)",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/transition-wellness-post-20.webp",
    title: "Transition Wellness (Post-20)",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/Xtra-Milk.webp",
    title: "Xtra Milk",
    description: "Higher yield and better quality milk",
  },
   {
    image: "/public/image/Xtra-Milk-8000.webp",
    title: "Xtra Milk 8000",
    description: "Higher yield and better quality milk",
  },
  {
    image: "/public/image/Xtra-Milk-Prime.webp",
    title: "Xtra Milk Prime",
    description: "Higher yield and better quality milk",
  },
  {
    image: "/public/image/Xtra-Milk-Buff.webp",
    title: "Xtra Milk Buff",
    description: "Higher yield and better quality milk",
  },
  

];

  return (
    <div>
      <Navbar/>
        <Product/>
        <Heading/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 my-8 mx-auto max-w-6xl">
  {products.map((item, index) => (
    <Card key={index} {...item} />
  ))}
</div>
<Heading2/>
<Testimonial/>
        
       {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />

        
      </Routes> */}
      <Footer/>


    </div>
  )
}

export default App