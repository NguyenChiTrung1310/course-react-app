import {INFOR_USER} from '../apis/index';
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