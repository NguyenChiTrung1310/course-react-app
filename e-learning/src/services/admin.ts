import {LIST_PAGINATED_USER_API, LIST_USER_API, SEARCH_USER_API} from '../apis/index';
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

export async function getListPaginatedUserService(numberPage: any){
    return (
        request(
            LIST_PAGINATED_USER_API+ `${numberPage}`,
            'GET',
        )
    )
}

export async function searchUserListService(keyName: any){
    return (
        request(
            SEARCH_USER_API + `${keyName}`,
            'GET',
        )
    )
}