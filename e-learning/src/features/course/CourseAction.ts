import { Dispatch } from '@reduxjs/toolkit';
import { 
    getCourseList, 
    getCourseCategory, 
    getCourseByCategory,
    getCourseDetail,
    getStudentsByCourse,
    registerCourse
} from '../../services/course';
import { 
    fetchCoursesFail, 
    fetchCoursesSuccess,
    fetchCoursesCategory,
    fetchCoursesByCategory,
    courseDetail,
    studentByCourse,
    registerCourses
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

export const fetchStudentsByCourse = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getStudentsByCourse(id);
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(studentByCourse({data, status}));  
        } 
    }catch (error){
        const data = {
            error: {
                message: 'You must login to continue !'
            }
        };
        const status = 401;
        dispatch(studentByCourse({data, status}));  
        // toast.error('You must login to continue !');
    }
}

export const registerCoursesAction = (payload: object, maKhoaHoc: string) => async (dispatch: Dispatch) => {
    try {
        const response = await registerCourse(payload);
        const {data = {}, status = ''} = response; 
        if(status === 200) {
            dispatch(registerCourses({data, status})); 
        }
        toast.success(data); 
    }catch (error){
        const {response: {data = {}} = {}, } = error;
        toast.error(data);
    }
}


