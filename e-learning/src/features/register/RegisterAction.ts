import {registerSuccess, registerFail} from './RegisterSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { registerService } from '../../services/auth';


export const registerAction = (
    payload: object, // [1] payload is dataRegister. But in firm, we always use variable named "payload"
    successCallback = () => {},
    failureCallback = (msg: string) => {},
    ) => async (dispatch: Dispatch) => {
    try {
        const response = await registerService(payload); // [2] always named variable is "response"
        console.log('response: ', response);
        const {data = {}, status = ''} = response; // [3] always destructure data,...
        if(status === 200) {
            dispatch(registerSuccess({data, status}));  // [4] dispatch data to reducer to store data
            successCallback();
        } // [5] NEXT: go to RegisterSlice.ts file
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        dispatch(registerFail(data));
        failureCallback(data);
    }
}