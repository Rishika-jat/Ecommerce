import { SET_PRODUCTS} from "./actionTypes";
import { ADD_TO_CART } from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product)=>{
  return{
    type:ADD_TO_CART,
    payload:product,
  };
};


//flux
//MVC
