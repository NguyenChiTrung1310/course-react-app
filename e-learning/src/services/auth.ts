import {LOGIN_API ,REGISTER_API} from '../apis/index';
import request from '../configs/request';

export async function registerService(payload: any) {
    return (
        request(
            REGISTER_API,
            'POST',
            payload
        )
    );
}

export async function loginService(payload:any) {
    return(
        request(
            LOGIN_API,
            'POST',
            payload
        )
    )
}
