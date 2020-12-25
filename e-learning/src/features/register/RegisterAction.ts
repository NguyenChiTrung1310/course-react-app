import {registerSuccess, registerFail} from './RegisterSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { registerService } from '../../services/auth';


export const registerAction = (
    dataRegister: object, 
    successCallback = () => {},
    failureCallback = (msg: string) => {},
    ) => async (dispatch: Dispatch) => {

    try {
        const response = await registerService(dataRegister);
        console.log('response: ', response);
        const {data = {}, status = ''} = response;
        if(status === 200) {
            dispatch(registerSuccess(data));  
            successCallback();
        }
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        dispatch(registerFail(data));
        failureCallback(data);
    }
}