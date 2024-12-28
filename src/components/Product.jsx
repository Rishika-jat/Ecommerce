
import React from 'react';
import { addToCart,setItemQuantity } from './actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineShoppingBag } from "react-icons/md";
 import { CiHeart } from "react-icons/ci";
 import { useNavigate } from 'react-router-dom';

const Product = ({ product, onClick }) => {
  const dispatch = useDispatch();
const itemQuantity = useSelector((state)=>state.products.itemQuantity);
const navigate = useNavigate();
const handleAddToCart=(product)=>{
  dispatch(addToCart(product))
navigate('/cart')
}

  if (!product) {
    return null;
  }
  const handleWishlist=()=>{
    
  }
  return (
    <>
    <div onClick={onClick} className='relative hover:scale-105 transition-transform duration-300'>
      <div>
        <img
        
          src={product.images[0]}
          alt={product.title}
          width={250}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-0">
        <p className="w-64 text-center">{product.title}</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>${product.price}</p>
      </div>
      <div className='absolute top-6 flex items-center justify-center gap-3 w-full h-96 hover:scale-110 transition-transform duration-300 '>
<button className='bg-transparent border-0'><p className='bg-white w-10 h-10 rounded-full flex items-center justify-center'>
  <CiHeart width={200} onClick={handleWishlist}/>
</p></button>
<p className='bg-white w-10 h-10 rounded-full flex items-center justify-center'>
  <MdOutlineShoppingBag onClick={() => handleAddToCart(product)}/>
</p>
    </div>
    </div>
   
    </>
  );
};

export default Product;
