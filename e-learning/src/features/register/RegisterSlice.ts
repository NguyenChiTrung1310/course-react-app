import { createSlice } from '@reduxjs/toolkit';
import {AUTH_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: AUTH_REDUCER.REGISTER, // [6] reducer name
    initialState:{ // [7] declare init
        registerResponse: { // [8] data response is always an OBJECT 
            status: 0,
            response: {}
        }
    },
    reducers:{
        // [9] contains reducer function name
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

const {actions, reducer} = registerSlice; // [10] must declare like this line following Redux docs 
const {registerSuccess, registerFail} = actions; // [11] this is just a destructure

export {registerSuccess, registerFail};
export default reducer; // [12] NEXT: go to store.ts