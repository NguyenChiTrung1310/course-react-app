import {createSlice} from '@reduxjs/toolkit';
import {AUTH_REDUCER} from '../../constants'

const loginSlice= createSlice({
    name: AUTH_REDUCER.LOGIN,
    initialState:{
        loginResponse: {
            status: 0,
            response: {}
        }
    },
    reducers:{
        //contains reducerfunction name
        loginSucess: (state, {payload})=>{
            state.loginResponse= {
                status: payload.status,
                response: payload.data,
            };
        },
        loginFail:(state, {payload})=>{
            state.loginResponse= {
                status: payload.status,
                response: payload.data,
            };
        }
    }
});

const {actions, reducer}= loginSlice;
const {loginSucess, loginFail}= actions;

export {loginSucess, loginFail};
export default reducer;