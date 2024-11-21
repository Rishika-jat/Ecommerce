import React from 'react'
import { useSelector } from 'react-redux';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='mx-10 my-20'>
        <div className='w w-7/12'>
      <div className='flex items-center justify-between'>
        <h1>Shopping Cart</h1>
        <h4>3 items</h4>
      </div>
      <div className='flex justify-between text-gray-500'>
        <p>PRODUCT DETAILS</p>
        <div className='flex gap-40'>
          <p>QUANTITY</p>
          <p>PRICE</p>
          <p>TOTAL</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex justify-between items-center '>
        <div>
          <img src="" alt="img" />
        </div>
        <div>
          <p>fifa</p>
        </div>
      </div>
      <div className='w-7/12 flex justify-evenly gap-44'>
      <div className='flex'>
        <p>-</p>
        <p>0</p>
        <p>+</p>
      </div>
      <div>
        <p>$44.00</p>
      </div>
      <div>
        <p>total</p>
      </div>
      </div>
    
      </div>
    
    </div>
    </div>
  
  )
}

export default Cart
