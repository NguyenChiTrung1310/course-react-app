/* =============* LINKS ROUTER *============= */
const HOME_PAGE = '/';
const LOGIN_PAGE = '/login';
const REGISTER_PAGE='/register'; 
const PROFILE_USER='/profile_user'; 
const COURSE_CATEGORY_PAGE='/course-category';

export {HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE, COURSE_CATEGORY_PAGE, PROFILE_USER}


/* =============* REDUCER + ACTION *============= */
 
const AUTH_REDUCER = {
    LOGIN: 'login',
    REGISTER: 'register',
};

const COURSE_REDUCER = {
    COURSE_LIST: 'course_list',
}

const PROFILE_USER_REDUCER={
    INFOR_USER:'info_user',
}

export {AUTH_REDUCER, COURSE_REDUCER, PROFILE_USER_REDUCER}

/* =============* LOCALSTORAGE KEY CONSTANTS *============= */
const LOCAL_STORAGE_TOKEN_KEY= '@token';
const LOCAL_STORAGE_CREDENTIALS_KEY = '@credentials';
export {LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_CREDENTIALS_KEY}
