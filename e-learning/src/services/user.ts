import {INFOR_USER, UPDATE_INFOR_USER_API} from '../apis/index';
import request from '../configs/request';

export async function infoUserService(payload: any){
    return (
        request(
            INFOR_USER,
            'POST',
            payload,
        )
    )
}

export async function updateinforUserService(payload: any){
    return(
        request(
            UPDATE_INFOR_USER_API,
            'PUT',
            payload,
        )
    )
}