import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Creating the Redux store with the combined reducer
const Store = createStore(rootReducer);

export default Store;
