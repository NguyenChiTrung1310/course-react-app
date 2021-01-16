import { createSlice } from '@reduxjs/toolkit';
import {CART_REDUCER} from '../../constants';

const cartSlice = createSlice({
    name: CART_REDUCER, 
    initialState:{ 
        numberCarts: 0
    },
    reducers:{
        addToCart: (state) => {
            state.numberCarts++;
        },
        deleteFromCart: (state) => {
            state.numberCarts--;
        }   
    }
});

const {actions, reducer} = cartSlice;
const {
    addToCart
} = actions;

export {
    addToCart
}

export default reducer;