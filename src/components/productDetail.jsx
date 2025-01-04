
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { addToCart, setItemQuantity } from './actions/ProductAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector((state) => state.products.itemQuantity);
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart!", { position: "top-right", autoClose: 3000 });
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) {
      dispatch(setItemQuantity(itemQuantity - 1));
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(setItemQuantity(itemQuantity + 1));
  };

  return (
    <div>
      <div className="mx-32 my-16 flex gap-10">
        <div>
          <div>
            <img
              src={product.images[0]}
              alt="img1"
              width={180}
              onClick={() => setDisplayImage(product.images[0])}
            />
          </div>
          <div>
            <img
              src={product.images[1]}
              alt="img2"
              width={180}
              onClick={() => setDisplayImage(product.images[1])}
            />
          </div>
          <div>
            <img
              src={product.images[2]}
              alt="img3"
              width={180}
              onClick={() => setDisplayImage(product.images[2])}
            />
          </div>
        </div>
        <div>
          <div>
            <img src={displayImage} alt="main-img" width={550} />
          </div>
        </div>
        <div>
          <p className="text-color-blue text-3xl font-bold">${product.price}</p>
          <h1 className="text-4xl">{product.title}</h1>
          <h3>{product.category.name}</h3>
          <span className="text-gray-500">id: {product.id}</span><br />
          <span className="text-gray-500">creation: {new Date(product.category.creationAt).toISOString().split("T")[0]}</span><br />
          <span className="text-gray-500">update: {new Date(product.category.updatedAt).toISOString().split("T")[0]}</span><br />
          <span className="text-gray-500">stock: Many in stock</span><br />
          <p>{product.description}</p><br />
          <div className='flex items-center justify-evenly gap-5'>
            <div className="flex mt-3">
              <button className="border-0 px-5 py-2 text-gray-500 text-2xl" onClick={handleDecreaseQuantity}>-</button>
              <button className="px-4 py-2 font-bold border-0">{itemQuantity}</button>
              <button className="border-0 px-4 py-2 text-gray-500 text-2xl" onClick={handleIncreaseQuantity}>+</button>
            </div>
            <div className="color-blue w-32 flex items-center justify-center mt-4">
              <FaShoppingBag color="white" />
              <button className="color-blue text-white border-0 font-bold py-3 px-4" onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
