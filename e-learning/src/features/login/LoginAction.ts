import {loginSucess, loginFail} from './LoginSlice';
import {Dispatch} from '@reduxjs/toolkit';
import {loginService} from '../../services/auth';
import { toast } from 'react-toastify';

export const loginAction= (dataLogin: object 
)=> async (dispatch: Dispatch) =>{
    
    try{
        const response= await loginService(dataLogin);
        console.log('response', response);
        const {data= {}, status= ''}= response;
        if(status ===200){
            dispatch(loginSucess(data));
            toast.success('Đăng nhập Thành Công !!!');  
        }
    }catch(error){
        const {response: {data= {}}= {}, }= error;
        dispatch(loginFail(data)); 
        toast.error(data);
    }
}