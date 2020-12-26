import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import registerReducer from './features/register/RegisterSlice';
import courseReducer from './features/course/CourseSlice';

const reducer = combineReducers({
  // [13] here we will be adding reducers
  register: registerReducer,
  course: courseReducer,
})
const store = configureStore({
  reducer,
})
export default store;