import {createSlice} from '@reduxjs/toolkit';
import {ADMIN_REDUCER} from './../../constants';

const AdminSlice=createSlice({
    name: ADMIN_REDUCER.LIST_USER,
    initialState:{
        listUserResponse:{
            status:0,
            response:[],
        },
        listUserPaginatedResponse:{
            status:0,
            response:[],
        }
    },
    reducers:{
        getListUserSuccess:(state, {payload})=>{
            state.listUserResponse={
                status: payload.status,
                response: payload.data,
            }
        },
        fetchListPaginationUserSuccess:(state, {payload})=>{
            state.listUserPaginatedResponse={
                status: payload.status,
                response: payload.data,
            }
        }
    }
})

const {actions, reducer}= AdminSlice;
const {getListUserSuccess, fetchListPaginationUserSuccess}= actions;

export {getListUserSuccess, fetchListPaginationUserSuccess};
export default reducer;