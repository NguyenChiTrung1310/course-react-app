import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import registerReducer from './features/register/RegisterSlice';

const reducer = combineReducers({
  // here we will be adding reducers
  register: registerReducer
})
const store = configureStore({
  reducer,
})
export default store;