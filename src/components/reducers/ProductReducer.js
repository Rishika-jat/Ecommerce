

const initialState = {
    products: [],
    cart: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const product= action.payload;
        const existingProduct = state.cart.find(item => item.id === product.id);
  
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...product, quantity :1 }]
          };
        }
      
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        };
  
      // Other cases...
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  