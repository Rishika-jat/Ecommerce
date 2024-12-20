import React  from 'react'
import Home from "./components/Home"
import Shop from "./components/Shop"
import Contact from './components/Contact'
import Fetch from './components/fetchdata/Fetch'
import Register from "./components/MyAccount/Register"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import { useState } from "react"
import ProductDetail from './components/productDetail'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/footer/Footer"
import Wishlist  from './components/Wishlist'
import Cart from "./components/Cart"
const App = () => {
  const [products,setProducts] = useState([])
  
  // console.log(products);
  return (

    <>
    <Fetch setProducts={setProducts}  />
   
  <Router>
<Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/shop" element={<Shop products={products}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/MyAccount" element={<Register/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  )
}
// bg-gradient-to-r from-blue-300 to-gray-300

export default App
