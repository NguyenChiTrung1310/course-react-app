import { createSlice } from '@reduxjs/toolkit';
import {AUTH_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: AUTH_REDUCER.REGISTER,
    initialState:{
        registerResponse: {}
    },
    reducers:{
        // contains reducer function name
        registerSuccess: (state, {payload}) => {
            state.registerResponse = payload;
        },
        registerFail: (state, {payload}) => {
            state.registerResponse = payload;
        }
    }
});

const {actions, reducer} = registerSlice;
const {registerSuccess, registerFail} = actions;

export {registerSuccess, registerFail};
export default reducer;