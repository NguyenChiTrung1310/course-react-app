 
import React from 'react'
import { Dispatch } from '@reduxjs/toolkit';
import {getProfileSuccess, getProfileFail, updateProfileSuccess, editButtonReducer} from './profileUserSlice';
import {infoUserService, updateinforUserService} from '../../services/user'
 
export const ProfileAction= (payload: object 
    )=> async (dispatch: Dispatch) =>{
     try{
         const response= await infoUserService(payload);
        //  console.log('inforUserToken', response); 
         const {data= {}, status= ''}= response;
         if( status ===200){
            dispatch(getProfileSuccess({data, status}));
         }
     }
    catch(error){
        const {response: {data= {}}= {}, }= error; 
        dispatch(getProfileFail(data));
    }
 }
 
 export const updateProfileAction=(payload: object
    )=> async(dispatch: Dispatch)=>{
    try{

        const response = await updateinforUserService(payload);
        console.log('dispatch Action updateinforUser', response);
        const { data = {}, status = '' } = response;
        dispatch(updateProfileSuccess({ data, status }));
    }
    catch(error){
        // console.log(error);
        // const {response: {data= {}}= {}, }= error;  
    }
 }
 
 export const stateEditButtonAction = (payload: any) => async (dispatch: Dispatch) => {
    try {
        // console.log("payload", payload);
        dispatch(editButtonReducer(payload));
    }
    catch (error) {
        console.log(error);
    }
}