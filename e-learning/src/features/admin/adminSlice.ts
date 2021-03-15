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
        },
        listUserSearchResponse:{
            status: 0,
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
        },
        fetchListSearchUserSuccess:(state, {payload})=>{
            state.listUserSearchResponse={
                status: payload.status,
                response: payload 
            }
        }
    }
})

const {actions, reducer}= AdminSlice;
const {getListUserSuccess, fetchListPaginationUserSuccess, fetchListSearchUserSuccess}= actions;

export {getListUserSuccess, fetchListPaginationUserSuccess, fetchListSearchUserSuccess};
export default reducer;