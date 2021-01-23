import {LIST_USER_API} from '../apis/index';
import request from '../configs/request';


export async function getListUserService(){
    return (
        request(
            LIST_USER_API,
            'GET',
            // payload,
        )
    )
}