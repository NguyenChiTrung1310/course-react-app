 
import React from 'react'
import { Dispatch } from '@reduxjs/toolkit';
import {infoUserService} from './../../services/user'
 
export const profileUserAction= (payload: object 
    )=> async (dispatch: Dispatch) =>{
     try{
         const response= await infoUserService(payload);
         console.log('inforUserToken', response); 
     }
    catch(error){
        const {response: {data= {}}= {}, }= error; 
    }
 }
 
 
 