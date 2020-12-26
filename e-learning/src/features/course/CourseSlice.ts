import { createSlice } from '@reduxjs/toolkit';
import {COURSE_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: COURSE_REDUCER.COURSE_LIST, 
    initialState:{ 
        courseListResponse: { 
            status: 0,
            response: {}
        }
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
        }
    }
});

const {actions, reducer} = registerSlice;
const {fetchCoursesSuccess, fetchCoursesFail} = actions;

export {fetchCoursesSuccess, fetchCoursesFail};
export default reducer; 