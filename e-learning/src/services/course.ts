import {COURSE_API} from '../apis/index';
import request from '../configs/request';

export async function courseService() {
    return (
        request(
            COURSE_API,
            'GET',
        )
    );
}