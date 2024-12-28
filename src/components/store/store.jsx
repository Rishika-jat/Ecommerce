import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
