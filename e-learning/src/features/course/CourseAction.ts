import { Dispatch } from '@reduxjs/toolkit';
import { courseService } from '../../services/course';
import { fetchCoursesFail, fetchCoursesSuccess } from './CourseSlice';

export const fetchCourseList = () => async (dispatch: Dispatch) => {
    try {
        const response = await courseService();
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(fetchCoursesSuccess({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        dispatch(fetchCoursesFail(data));
    }
}


