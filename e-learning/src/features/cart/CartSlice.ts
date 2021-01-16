import { createSlice } from '@reduxjs/toolkit';
import {CART_REDUCER} from '../../constants';
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
        },
        courseID: (state, {payload}) => {
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
    courseID
} = actions;

export {
    addToCart,
    courseID
}

export default reducer;