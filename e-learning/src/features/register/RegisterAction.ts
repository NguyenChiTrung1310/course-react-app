import {registerSuccess, registerFail} from './RegisterSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { registerService } from '../../services/auth';
import { toast } from 'react-toastify';


export const registerAction = (
    payload: object, 
    redirect = () => {},
    ) => async (dispatch: Dispatch) => {
    try {
        const response = await registerService(payload); 
        console.log('response', response);
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(registerSuccess({data, status})); 
            toast.success('Register Success !!!'); 
            redirect();
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        dispatch(registerFail(data));
        toast.error(data);
    }
}