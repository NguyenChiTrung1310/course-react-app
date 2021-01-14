import { stateEditButtonAction } from './profileUserAction';
import { createSlice } from '@reduxjs/toolkit';
import {PROFILE_USER_REDUCER} from '../../constants'

const infoUserSlice= createSlice({
    name: PROFILE_USER_REDUCER.INFOR_USER,
    initialState:{
        infoUserResponse:{
            status: 0,
            response:{}
        },
        updateUserResponse: {
            status: 0,
            response: {},
        },
        stateEditButton: true,
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
        },
        updateinforUserSuccess: (state, { payload }) => {
            state.updateUserResponse = {
                status: payload.status,
                response: payload.data,
                // stateEditButton: payload.stateEditButtonAction,
            }
        },
        updateinforUserFail: (state, { payload }) => {
            state.updateUserResponse = {
                status: payload.status,
                response: payload.data,
                // stateEditButton: payload.stateEditButtonAction,
            }
        },
        editButtonReducer: (state, { payload }) => {
            state.stateEditButton= payload.stateEditButton;
        },
    }
})

const {actions, reducer }= infoUserSlice;
const {inforUserSucess, inforUserFail, updateinforUserSuccess, updateinforUserFail, editButtonReducer } = actions;

export {inforUserSucess, inforUserFail, updateinforUserSuccess, updateinforUserFail, editButtonReducer };
export default reducer;