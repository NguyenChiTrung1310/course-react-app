import { createSlice } from '@reduxjs/toolkit';
import {PROFILE_REDUCER} from '../../constants'

const ProfileSlice= createSlice({
    name: PROFILE_REDUCER.PROFILE_API,
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
         
        getProfileSuccess:(state, {payload})=>{
            state.infoUserResponse={
                status: payload.status,
                response:payload.data,
            };
        },
        getProfileFail:(state, {payload})=>{
            state.infoUserResponse={
                status: payload.status,
                response:payload.data,
            }
        },
        updateProfileSuccess: (state, { payload }) => {
            state.updateUserResponse = {
                status: payload.status,
                response: payload.data, 
            }

            const {
                taiKhoan,
                matKhau,
                hoTen,
                soDt,
                maLoaiNguoiDung,
                maNhom,
                email
            }= payload;

            state.infoUserResponse={
                status:200,
                response:{
                    taiKhoan,
                    matKhau,
                    hoTen,
                    soDt,
                    maLoaiNguoiDung,
                    maNhom,
                    email,
                }
            }

        },
        updateProfileFail: (state, { payload }) => {
            state.updateUserResponse = {
                status: payload.status,
                response: payload.data, 
            }
        },
        editButtonReducer: (state, { payload }) => {
            state.stateEditButton= payload;
        },
    }
})

const {actions, reducer }= ProfileSlice;
const {getProfileSuccess, getProfileFail, updateProfileSuccess, updateProfileFail, editButtonReducer } = actions;

export {getProfileSuccess, getProfileFail, updateProfileSuccess, updateProfileFail, editButtonReducer };
export default reducer;