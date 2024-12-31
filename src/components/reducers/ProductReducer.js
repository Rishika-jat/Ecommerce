
import { SET_PRODUCTS, ADD_TO_CART, SET_ITEM_QUANTITY, UPDATE_CART_QUANTITY ,REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/actionTypes"

const initialState = {
  products: [],
  cart: [],
  wishlist:[],
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

        case ADD_TO_WISHLIST:
          const product2 =action.payload;
          const existingProduct2 = state.wishlist.find(item=>item.id===product2.id);

          if(existingProduct2){
            return {
              ...state,
              wishlist:state.wishlist.map(item=> item.id===product2.id ? {...item,quantity:item.quantity+state.itemQuantity}:item)
            }
          }
          else{
            return{
              ...state, 
              wishlist:[...state.wishlist,{...product2, quantity:state.itemQuantity}],
            }
          }

          case REMOVE_FROM_WISHLIST:
            return{
              ...state,
              wishlist:state.wishlist.filter(item=>item.id!==action.payload)
            }
    default:
      return state;
  }
};

export default productReducer;
