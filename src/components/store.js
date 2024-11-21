import {createStore} from 'redux';
import rootReducer from "./reducers"
import { createStoreHook } from 'react-redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

