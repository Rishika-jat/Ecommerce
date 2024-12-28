

// const initialState = {
//     products: [],
//     cart: []
//   };
  
//   const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const product= action.payload;
//         const existingProduct = state.cart.find(item => item.id === product.id);
  
//         if (existingProduct) {
//           return {
//             ...state,
//             cart: state.cart.map(item =>
//               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//           };
//         } else {
//           return {
//             ...state,
//             cart: [...state.cart, { ...product, quantity :1 }]
//           };
//         }
      
//       case 'SET_PRODUCTS':
//         return {
//           ...state,
//           products: action.payload
//         };
  
//       // Other cases...
  
//       default:
//         return state;
//     }
//   };
  
//   export default productReducer;
  
import { SET_PRODUCTS, ADD_TO_CART, SET_ITEM_QUANTITY, UPDATE_CART_QUANTITY ,REMOVE_FROM_CART } from "../actions/actionTypes"

const initialState = {
  products: [],
  cart: [],
  itemQuantity: 1,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + state.itemQuantity } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: state.itemQuantity }],
        };
      }

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_ITEM_QUANTITY:
      return {
        ...state,
        itemQuantity: action.payload,
      };

    case UPDATE_CART_QUANTITY:
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === productId ? { ...item, quantity: quantity } : item
        ),
      };

      case REMOVE_FROM_CART:
        return{
          ...state,
          cart:state.cart.filter(item=>item.id!==action.payload)
        }

    default:
      return state;
  }
};

export default productReducer;
