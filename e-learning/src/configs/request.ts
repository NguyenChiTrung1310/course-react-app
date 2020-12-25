import axios from 'axios' 
import {getDataFromLocalStorage} from '../utils/LocalStorage/LocalStorage'



export async function request ( url = '', method= '', data= {}){
    
    const config:any= {};
    
    const token= getDataFromLocalStorage();

    if (token){
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }

    return await axios({
        url: url,
        method: method,
        data: data,
        ...config,
    })
}

export default request;
