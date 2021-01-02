import { Dispatch } from '@reduxjs/toolkit';
import { getCourseList, getCourseCategory, getCourseByCategory } from '../../services/course';
import { 
    fetchCoursesFail, 
    fetchCoursesSuccess,
    fetchCoursesCategory,
    fetchCoursesByCategory
} from './CourseSlice';
import { toast } from 'react-toastify';

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
        toast.error(data);
    }
}

export const fetchCourseCategory = () => async (dispatch: Dispatch) => {
    try {
        const response = await getCourseCategory();
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(fetchCoursesCategory({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        toast.error(data);
    }
}

export const fetchCourseByCategory = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getCourseByCategory(id);
        const {data = {}, status = ''} = response; 
        console.log('data: ', data);
        if(status === 200) {
            dispatch(fetchCoursesByCategory({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        toast.error(data);
    }
}


