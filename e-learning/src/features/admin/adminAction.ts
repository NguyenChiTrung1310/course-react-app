import React from 'react'
import {Dispatch} from '@reduxjs/toolkit'
import {getListUserService} from './../../services/admin'
import { getListUserSuccess } from './adminSlice';

export const adminAction=()=> async( dispatch: Dispatch)=>{
    try{
        const response= await getListUserService();
        const { data= [], status=''}= response; 
        // console.log('Response', response.data);
        if(status === 200){
            dispatch(getListUserSuccess({data, status}));
        }

    }catch(e){
        console.log(e);
    }
}