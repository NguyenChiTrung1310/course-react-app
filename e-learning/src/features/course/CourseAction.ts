import { Dispatch } from '@reduxjs/toolkit';
import { 
    getCourseList, 
    getCourseCategory, 
    getCourseByCategory,
    getCourseDetail
} from '../../services/course';
import { 
    fetchCoursesFail, 
    fetchCoursesSuccess,
    fetchCoursesCategory,
    fetchCoursesByCategory,
    courseDetail
} from './CourseSlice';
import { toast } from 'react-toastify';
import { responsiveFontSizes } from '@material-ui/core';

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
        if(status === 200) {
            dispatch(fetchCoursesByCategory({data, status}));  
        } 
    }catch (error){
        const {response: {data = {}, status = ''} = {}} = error;
        dispatch(fetchCoursesByCategory({data, status}));  
        toast.error(data);
    }
}

export const fetchCourseDetail = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getCourseDetail(id);
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(courseDetail({data, status}));  
        }
    }catch (error){
        const data = {
            error: {
                message: 'Error server'
            }
        };
        const status = 204;
        dispatch(courseDetail({data, status})); 

        toast.error('Nani ??? What happened with BE\'s api ??');
    }
}



