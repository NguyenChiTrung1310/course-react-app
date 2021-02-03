import { clearStoreFromlocalStorage } from './utils/LocalStorage/LocalStorage';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import loginReducer from './features/login/LoginSlice';
import registerReducer from './features/register/RegisterSlice';
import courseReducer from './features/course/CourseSlice'; 
import profileReducer from './features/Profile/profileUserSlice';
import cartReducer from './features/cart/CartSlice'; 
import adminReducer from './features/admin/adminSlice';

const appReducer = combineReducers({
  // [13] here we will be adding reducers
  login: loginReducer,
  register: registerReducer,
  course: courseReducer,
  profile:  profileReducer,
  cart: cartReducer,
  admin: adminReducer,
})

const rootReducer=( state:any, action: any)=>{
  if(action.type==='CLEAR_STORE'){
    clearStoreFromlocalStorage();
    state= undefined; 
  }
  return appReducer(state,action);
}

const store = configureStore({
  reducer: rootReducer,
})

export type RootState= ReturnType<typeof rootReducer>;
export default store;