import { createSlice } from '@reduxjs/toolkit';
import {COURSE_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: COURSE_REDUCER.COURSE_LIST, 
    initialState:{ 
        courseListResponse: { 
            status: 0,
            response: []
        },
        courseCategoryResponse: { 
            status: 0,
            response: []
        },
        coursesListByCategory: { 
            status: 0,
            response: []
        },
        courseDetailResponse: { 
            status: 0,
            response: {}
        },
        studentByCourseResponse: { 
            status: 0,
            response: {}
        },
    },
    reducers:{
        fetchCoursesSuccess: (state, {payload}) => {
            state.courseListResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
        fetchCoursesFail: (state, {payload}) => {
            state.courseListResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
        fetchCoursesCategory: (state, {payload}) => {
            state.courseCategoryResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
        fetchCoursesByCategory: (state, {payload}) => {
            state.coursesListByCategory = {
                status: payload.status,
                response: payload.data,
            };
        },
        courseDetail: (state, {payload}) => {
            state.courseDetailResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
        studentByCourse: (state, {payload}) => {
            state.studentByCourseResponse = {
                status: payload.status,
                response: payload.data,
            };
        },
    }
});

const {actions, reducer} = registerSlice;
const {
    fetchCoursesSuccess, 
    fetchCoursesFail,
    fetchCoursesCategory,
    fetchCoursesByCategory,
    courseDetail,
    studentByCourse
} = actions;

export {
    fetchCoursesSuccess, 
    fetchCoursesFail,
    fetchCoursesCategory,
    fetchCoursesByCategory,
    courseDetail,
    studentByCourse
};
export default reducer; 