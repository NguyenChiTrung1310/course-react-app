import {Dispatch} from '@reduxjs/toolkit'
import {getListUserService, getListPaginatedUserService} from './../../services/admin'
import { getListUserSuccess, fetchListPaginationUserSuccess } from './adminSlice';

export const adminAction=()=> async( dispatch: Dispatch)=>{
    try{
        const response= await getListUserService();
        const { data= [], status=''}= response; 
        // console.log('Response', response.data);
        if(status === 200){
            dispatch(getListUserSuccess({data, status}));
        }

    }catch(e){
        // console.log(e);
    }
}

export const fetchListPaginationUser=(numberPage: any)=> async(dispatch: Dispatch)=>{
    try{
        const response= await getListPaginatedUserService(numberPage); 
        const {data= {}, status= ''}= response;
        // console.log(response);
        if(status===200){
            dispatch(fetchListPaginationUserSuccess({data, status}));
        }
    }catch(err){
        console.log(err);
    }
}