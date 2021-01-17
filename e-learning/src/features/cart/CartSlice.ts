import { createSlice } from '@reduxjs/toolkit';
import {
    CART_REDUCER,
    LOCAL_STORAGE_CART,
    LOCAL_STORAGE_COURSE_ID
} from '../../constants';
import {Cart} from './type';

const initialState: Cart = {
   cartOrder: {
       numberCarts: 0,
       cartList: []
   },
   ordered: {
       courseIdList: []
   }
}

const cartSlice = createSlice({
    name: CART_REDUCER, 
    initialState,
    reducers:{
        addToCart: (state, {payload}) => {
            const newCart = state.cartOrder.cartList;
            newCart.push(payload);

            const num: number = newCart.length;
            
            state.cartOrder = {
                numberCarts: num,
                cartList: newCart
            }
            localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(state.cartOrder.cartList))
        },
        courseIDs: (state, {payload}) => {
            const newArr = state.ordered.courseIdList;
            newArr.push(payload);

            state.ordered = {
                courseIdList: newArr
            }

            localStorage.setItem(LOCAL_STORAGE_COURSE_ID, JSON.stringify(state.ordered.courseIdList))
        } 
    }
});

const {actions, reducer} = cartSlice;
const {
    addToCart,
    courseIDs
} = actions;

export {
    addToCart,
    courseIDs
}

export default reducer;