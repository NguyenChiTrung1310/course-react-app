import {LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_CREDENTIALS_KEY} from '../../constants';

//set credentials
export const setDataFromLocalStorage=(data: any)=>{
    return localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, data);
}


//get token
export const getDataFromLocalStorage= () =>{
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    return token;
}

//get credentials
export const getDataFromCredentials=(data: any)=>{
    return localStorage.getItem(data);
}


//clear localstorage
export const clearStoreFromlocalStorage=()=>{
    return localStorage.clear();
}