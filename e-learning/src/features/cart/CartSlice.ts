import { createSlice } from '@reduxjs/toolkit';
import {
    CART_REDUCER,
    LOCAL_STORAGE_COURSE_DETAIL,
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
            localStorage.setItem(LOCAL_STORAGE_COURSE_DETAIL, JSON.stringify(payload))
            const newCart = state.cartOrder.cartList;
            newCart.push(payload);

            const num: number = newCart.length;
            
            state.cartOrder = {
                numberCarts: num,
                cartList: newCart
            }
        },
        courseIDs: (state, {payload}) => {
            localStorage.setItem(LOCAL_STORAGE_COURSE_ID, JSON.stringify(payload))
            const newArr = state.ordered.courseIdList;
            newArr.push(payload);

            state.ordered = {
                courseIdList: newArr
            }
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