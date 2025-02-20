import React  from 'react'
import Home from "./components/Home"
import Shop from "./components/Shop"
import Contact from './components/Contact'
import Fetch from './components/fetchdata/Fetch'
import Register from "./components/MyAccount/Register"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import { useState } from "react"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/footer/Footer"
import Wishlist  from './components/Wishlist'
import Cart from "./components/Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [products,setProducts] = useState([])
  
  // console.log(products);
  return (

    <>
    <Fetch setProducts={setProducts}  />
    <ToastContainer />
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


// Check all old projects & deploy - 
// responsive ecommerce -last lecture
// start portfolio design - 5 to 8
// blog application - 6 to 8 and then in class 
// and one mern little project - 9 to 11
// interview - 5 to 6