import { SET_PRODUCTS, ADD_TO_CART, SET_ITEM_QUANTITY, UPDATE_CART_QUANTITY,REMOVE_FROM_CART , ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './actionTypes';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const setItemQuantity = (quantity) => {
  return {
    type: SET_ITEM_QUANTITY,
    payload: quantity,
  };
};

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { productId, quantity },
  };
};

export const removeFromCart= (productId)=>{
return{
  type:REMOVE_FROM_CART,
  payload:productId,
};
};

export const addToWishlist = (product) =>{
  return{
    type:ADD_TO_WISHLIST,
    payload:product,
  }
}

export const removeFromWishlist = (productId)=>{
  return{
    type:REMOVE_FROM_WISHLIST, 
    payload:productId
  }
}