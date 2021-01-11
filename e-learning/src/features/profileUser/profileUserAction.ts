 
import React from 'react'
import { Dispatch } from '@reduxjs/toolkit';
import {inforUserSucess, inforUserFail} from './profileUserSlice';
import {infoUserService, updateinforUserService} from './../../services/user'
 
export const profileUserAction= (payload: object 
    )=> async (dispatch: Dispatch) =>{
     try{
         const response= await infoUserService(payload);
         console.log('inforUserToken', response); 
         const {data= {}, status= ''}= response;
         if( status ===200){
            dispatch(inforUserSucess({data, status}));
         }
     }
    catch(error){
        const {response: {data= {}}= {}, }= error; 
        dispatch(inforUserFail(data));
    }
 }
 
 export const updateProfileUserAction=(payload: object
    )=> async(dispatch: Dispatch)=>{
    try{
        const response= await updateinforUserService(payload);
        console.log('updateinforUser',response);
    }
    catch(error){
        console.log(error);
        // const {response: {data= {}}= {}, }= error;  
    }
 }
 
 