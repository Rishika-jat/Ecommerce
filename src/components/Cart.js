
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderplace from "../assets/order-place.jpg";
import { updateCartQuantity, removeFromCart, addToWishlist, removeFromWishlist } from './actions/ProductAction';
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const wishlist = useSelector((state) => state.products.wishlist);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product.quantity > 1) {
      dispatch(updateCartQuantity(productId, product.quantity - 1));
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    dispatch(updateCartQuantity(productId, product.quantity + 1));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  // Calculate the total items, subtotal, and total
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; // Add any additional charges or discounts here

  return (
    <div className='mx-10 my-16 flex gap-16 cart-main-container '>
      <div className='w-4/6 cart-heading-section'>
        <div className='flex items-center justify-between mb-5'>
          <h1>Shopping Cart</h1>
          <h4>{cart.length} items</h4>
        </div>
        <div className='flex justify-center color-blue w-10/12 text-white px-20 md:w-full lg:w-full xl:w-10/12 Cart-heading'>
          <div className='w-2/5 product-details'>
            <p className="">PRODUCT DETAILS</p>
          </div>
          <div className='flex justify-between gap-28'>
            <p>QUANTITY</p>
            <p>PRICE</p>
            <p>TOTAL</p>
          </div>
        </div>

        {cart.map((item) => (
          <div key={item.id} className='flex justify-between items-center w-full lg:w-full md:w-full mt-4 gap-28  border-x-0 border-t-0 border-solid border-gray-200 pb-4 l p-0 m-0 addtocartItem'>
            <div className='flex items-center w-full'>
              <div className='flex gap-7 justify-evenly text-gray-400 items-center mr-5'>
                <p className='text-xl' onClick={() => handleRemove(item.id)}><RiDeleteBin6Line /></p>
                <p onClick={() => handleWishlist(item)}>
                  {wishlist.some(wishlistItem => wishlistItem.id === item.id) ? (
                    <FaHeart className='text-xl' />
                  ) : (
                    <CiHeart className='text-xl' />
                  )}
                </p>
              </div>
              <div className=''>
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
            <div className='w-full flex justify-evenly gap-28'>
              <div className="flex mt-3 w-12 justify-center">
                <button className="border-0 px-5 py-2 text-gray-500 text-2xl" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button className="px-4 py-2 font-bold border-0">{item.quantity}</button>
                <button className="border-0 px-4 py-2 text-gray-500 text-2xl" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <div className='flex items-center justify-center w-6'>
                <p>${item.price}</p>
              </div>
              <div className='flex items-center justify-center w-6 pr-3'>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

  

      <div className='flex items-center justify-center xl:flex  flex-col'>
      <div className='flex lg:hidden md:hidden addToCart-image'>
      <img src={orderplace} alt="Order Place" width={250} />
      </div>
       
        <div className='w-2/6 lg:w-full md:full flex flex-col gap-5 items-center justify-center '>
        <div className="bg-white p-6 relative w-72  shadow-xl rounded-md total-modal-box">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <p>Total Items:</p>
            <p>{totalItems}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="w-full py-2 color-blue text-white font-bold rounded-md ">
            Proceed to Checkout
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;