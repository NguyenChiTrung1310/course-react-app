import { clearStoreFromlocalStorage, setDataFromLocalStorage } from './../../utils/LocalStorage/LocalStorage';
import {loginSucess, loginFail, logoutSuccess} from './LoginSlice';
import {Dispatch} from '@reduxjs/toolkit';
import {loginService} from '../../services/auth';
import { toast } from 'react-toastify'; 

export const loginAction= (payload: object 
)=> async (dispatch: Dispatch) =>{
    
    try{
        const response= await loginService(payload);
        console.log('response', response);
        const {data= {}, status= ''}= response; 
        if(status ===200){
            dispatch(loginSucess({data, status}));
            setDataFromLocalStorage(JSON.stringify(response));
            // localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, JSON.stringify(response));
            toast.success('Đăng nhập Thành Công !!!');  
        }
    }catch(error){
        const {response: {data= {}}= {}, }= error;
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
       console.log(e);
   }
}