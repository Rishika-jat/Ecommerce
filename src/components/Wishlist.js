

import React from "react";
import wishlistIcon from "../assets/wishlist.png";
import { addToCart, removeFromWishlist } from "./actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} has been added to the cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
    toast.info("Item removed from wishlist", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center mt-10">
          <img src={wishlistIcon} alt="Wishlist" width={200} />
        </div>
        <div className="flex justify-center items-center mt-10">
          <p>Your wishlist is empty.</p>
        </div>
      </>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-10">
        <img src={wishlistIcon} alt="Wishlist" width={200} />
      </div>
      <div className="flex w-full items-center justify-center flex-wrap">
        <div className="flex items-center mt-10 w-2/3 justify-center flex-wrap gap-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 mb-4 rounded-lg w-56 space-y-0 gap-2 shadow-2xl px-8"
            >
              <img src={item.images[0]} alt={item.title} width={250} />
              <p className="p-0 m-0 overflow-hidden text-ellipsis text-sm line-clamp-2 h-10">{item.title}</p>
              <p>${item.price}</p>
              <div className="flex gap-4 mt-4">
                <div className="color-blue w-32 flex items-center justify-center mt-4 p-0 m-0">
                  <FaHeart color="white" />
                  <button
                    className="color-blue text-white border-0 font-bold py-3 px-3"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="color-blue w-32 flex items-center justify-center mt-4 p-0 m-0">
                  <FaShoppingBag color="white" />
                  <button
                    className="color-blue text-white border-0 font-bold py-3 px-3"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
