import { createSlice } from '@reduxjs/toolkit';
import {AUTH_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: AUTH_REDUCER.REGISTER,
    initialState:{
        registerResponse: {
            status: 0,
            response: {}
        }
    },
    reducers:{
        // contains reducer function name
        registerSuccess: (state, {payload}) => {
            state.registerResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
        registerFail: (state, {payload}) => {
            state.registerResponse = {
                status: payload.status,
                response: payload.data,
            };
        }
    }
});

const {actions, reducer} = registerSlice;
const {registerSuccess, registerFail} = actions;

export {registerSuccess, registerFail};
export default reducer;