import { clearStoreFromlocalStorage, setDataFromLocalStorage, setTokenToLocalStorage } from './../../utils/LocalStorage/LocalStorage';
import {loginSucess, loginFail, logoutSuccess} from './LoginSlice';
import {Dispatch} from '@reduxjs/toolkit';
import {loginService} from '../../services/auth';
import { toast } from 'react-toastify'; 

export const loginAction= (payload: object 
)=> async (dispatch: Dispatch) =>{
    
    try{
        const response= await loginService(payload);
        console.log('LOGIN SUCCESS', response);
        const {data= {}, status= ''}= response; 
        if(status ===200){
            dispatch(loginSucess({data, status}));
            setDataFromLocalStorage(JSON.stringify(response));
            setTokenToLocalStorage(data.accessToken);
            toast.success('Đăng nhập Thành Công !!!');  
        } 
    }catch(error){
        const {response: {data= {}}= {}, }= error;
        console.log("LOGIN ERROR", data);
        dispatch(loginFail(data)); 
        toast.error(data);
    }
}

//clear localstorage
export const logoutAction=()=> async(dispatch: Dispatch)=>{ 
   try{
    clearStoreFromlocalStorage();
    dispatch(logoutSuccess);
    toast.success('Đăng xuất thành công');
   }
   catch(e){
    //    console.log(e);
   }
}