import {loginSucess} from './LoginSlice';
import {Dispatch} from '@reduxjs/toolkit';
import {loginService} from '../../services/auth';

export const loginAction= (dataLogin: object)=>async(
    dataLogin: object,
    successCallback=()=>{},
    failureCallback=(msg: string)=> {},
)=> async (dispatch: Dispatch) =>{
    
    try{
        const response= await loginService(dataLogin);
        console.log('response', response);
        const {data= {}, status= ''}= response;
        if(status ===200){
            dispatch(loginSucess(data));
            successCallback();
        }
    }catch(error){
        const {response: {data= {}}= {}, }= error;
        failureCallback(data);
    }
}