import {COURSE_API, COURSE_CATEGORY_API} from '../apis/index';
import request from '../configs/request';

export async function getCourseList() {
    return (
        request(
            COURSE_API,
            'GET',
        )
    );
}

export async function getCourseCategory() {
    return (
        request(
            COURSE_CATEGORY_API,
            'GET',
        )
    );
}