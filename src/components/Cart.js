
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import orderplace from "../assets/order-place.jpg"
import { updateCartQuantity } from './actions/ProductAction';
const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  

     const handleDecreaseQuantity=(productId)=>{
      const product = cart.find(item=>item.id===productId);
             if(product.quantity>1){
              dispatch(updateCartQuantity(productId,product.quantity-1));
             }
     };

     const handleIncreaseQuantity = (productId)=>{
      const product = cart.find(item=>item.id ===productId);
      dispatch(updateCartQuantity(productId,product.quantity+1));
     }

  return (
    <div className='mx-10 my-20 flex gap-16'>
      <div className='w w-4/6'>
        <div className='flex items-center justify-between'>
          <h1>Shopping Cart</h1>
          <h4>{cart.length} items</h4>
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

        {cart.map((item) => (
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
                <button className="border-0 px-5 py-2 text-gray-500 text-2xl" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button className=" px-4 py-2 font-bold border-0">{item.quantity}</button>
                <button className="border-0 px-4 py-2 text-gray-500 text-2xl" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
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



// import { useSelector, useDispatch } from 'react-redux';
// import { updateCartQuantity } from './actions/ProductAction'; // Adjust path as necessary

// const Cart = () => {
//   const cart = useSelector((state) => state.products.cart);
//   const dispatch = useDispatch();

//   const handleDecreaseQuantity = (productId) => {
//     const product = cart.find(item => item.id === productId);
//     if (product.quantity > 1) {
//       dispatch(updateCartQuantity(productId, product.quantity - 1));
//     }
//   };

//   const handleIncreaseQuantity = (productId) => {
//     const product = cart.find(item => item.id === productId);
//     dispatch(updateCartQuantity(productId, product.quantity + 1));
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.title} - Quantity: {item.quantity}
//             <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
//             <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
