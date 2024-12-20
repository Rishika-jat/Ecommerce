
import React from 'react';
import { useSelector } from 'react-redux';
import orderplace from "../assets/order-place.jpg"
const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems)

  return (
    <div className='mx-10 my-20 flex gap-16'>
      <div className='w w-4/6'>
        <div className='flex items-center justify-between'>
          <h1>Shopping Cart</h1>
          <h4>{cartItems.length} items</h4>
        </div>
        <div className='flex justify-between text-gray-500 '>
        <div>
        <p>PRODUCT DETAILS</p>
        </div>
        
          <div className='flex gap-40'>
            <p>QUANTITY</p>
            <p>PRICE</p>
            <p>TOTAL</p>
          </div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className='flex justify-between items-center mt-4 gap-28'>
            <div className='flex  items-center w-96 '>
              <div>
                {item.images && item.images.length > 0 ? (
                  <img src={item.images[0]} alt={item.title} className='w-20 h-20 object-cover' />
                ) : (
                  <img src="default-image-path.jpg" alt="default" className='w-20 h-20 object-cover' />
                )}
              </div>
              <div className='ml-4'>
                <p className='font-bold'>{item.title}</p>
              
              </div>
            </div>
            <div className='w-7/12 flex justify-evenly gap-44 '>
              
              <div className="flex mt-3">
                <button className="border-0 px-5 py-2 text-gray-500 text-2xl">-</button>
                <button className=" px-4 py-2 font-bold border-0">1</button>
                <button className="border-0 px-4 py-2 text-gray-500 text-2xl">+</button>
              </div>
              <div>
                <p>${item.price}</p>
              </div>
              <div>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div>
        <img src={orderplace}  alt="" width={400} />
      </div>
    </div>
  );
}

export default Cart;
