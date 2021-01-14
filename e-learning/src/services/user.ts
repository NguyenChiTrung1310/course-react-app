import {PROFILE_API, UPDATE_PROFILE_API} from '../apis/index';
import request from '../configs/request';

export async function infoUserService(payload: any){
    return (
        request(
            PROFILE_API,
            'POST',
            payload,
        )
    )
}

export async function updateinforUserService(payload: any){
    return(
        request(
            UPDATE_PROFILE_API,
            'PUT',
            payload,
        )
    )
}