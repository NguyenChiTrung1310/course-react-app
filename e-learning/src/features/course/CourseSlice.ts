import { createSlice } from '@reduxjs/toolkit';
import {COURSE_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: COURSE_REDUCER.COURSE_LIST, 
    initialState:{ 
        courseListResponse: { 
            status: 0,
            response: {}
        },
        courseCategoryResponse: { 
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
    }
});

const {actions, reducer} = registerSlice;
const {
    fetchCoursesSuccess, 
    fetchCoursesFail,
    fetchCoursesCategory
} = actions;

export {
    fetchCoursesSuccess, 
    fetchCoursesFail,
    fetchCoursesCategory
};
export default reducer; 