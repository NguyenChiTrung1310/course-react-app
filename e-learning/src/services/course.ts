import {
    COURSE_API, 
    COURSE_CATEGORY_API, 
    COURSE_BY_CATEGORY_API,
    COURSE_DETAIL_API,
    STUDENTS_BY_COURSE_API,
    REGISTER_COURSE_API
} from '../apis/index';
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

export async function getCourseByCategory(id: string) {
    return (
        request(
            COURSE_BY_CATEGORY_API + `${id}`,
            'GET',
        )
    );
}

export async function getCourseDetail(id: string) {
    return (
        request(
            COURSE_DETAIL_API + `${id}`,
            'GET',
        )
    );
}

export async function getStudentsByCourse(id: string) {
    return (
        request(
            STUDENTS_BY_COURSE_API + `${id}`,
            'GET',
        )
    );
}

export async function registerCourse(payload: object) {
    return (
        request(
            REGISTER_COURSE_API,
            'POST',
            payload
        )
    );
}