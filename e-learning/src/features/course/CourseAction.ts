import { Dispatch } from '@reduxjs/toolkit';
import { getCourseList, getCourseCategory } from '../../services/course';
import { 
    fetchCoursesFail, 
    fetchCoursesSuccess,
    fetchCoursesCategory
} from './CourseSlice';

export const fetchCourseList = () => async (dispatch: Dispatch) => {
    try {
        const response = await getCourseList();
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(fetchCoursesSuccess({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        dispatch(fetchCoursesFail(data));
    }
}

export const fetchCourseCategory = (failureCallback = (msg: string) => {},) => async (dispatch: Dispatch) => {
    try {
        const response = await getCourseCategory();
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(fetchCoursesCategory({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        failureCallback(data);
    }
}


