import { createSlice } from '@reduxjs/toolkit';
import {PROFILE_USER_REDUCER} from '../../constants'

const infoUserSlice= createSlice({
    name: PROFILE_USER_REDUCER.INFOR_USER,
    initialState:{
        infoUserResponse:{
            status: 0,
            response:{}
        }
    },
    reducers:{
         
        inforUserSucess:(state, {payload})=>{
            state.infoUserResponse={
                status: payload.status,
                response:payload.data,
            };
        },
        inforUserFail:(state, {payload})=>{
            state.infoUserResponse={
                status: payload.status,
                response:payload.data,
            }
        }
    }
})

const {actions, reducer }= infoUserSlice;
const {inforUserSucess, inforUserFail}= actions;

export {inforUserSucess, inforUserFail};
export default reducer;