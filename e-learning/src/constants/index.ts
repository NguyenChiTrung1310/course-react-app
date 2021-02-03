/* =============* LINKS ROUTER *============= */
const HOME_PAGE = '/';
const LOGIN_PAGE = '/login';
const REGISTER_PAGE='/register'; 
const PROFILE_USER='/profile'; 
const COURSE_CATEGORY_PAGE='/course-category';
const ADMIN_PAGE='/admin';
export {
    HOME_PAGE, 
    LOGIN_PAGE, 
    REGISTER_PAGE, 
    PROFILE_USER,
    COURSE_CATEGORY_PAGE,
    ADMIN_PAGE
}


/* =============* REDUCER + ACTION *============= */
 
const AUTH_REDUCER = {
    LOGIN: 'login',
    REGISTER: 'register',
};

const COURSE_REDUCER = {
    COURSE_LIST: 'course_list',
}

const PROFILE_REDUCER={
    PROFILE_API:'profile_user',
}

const ADMIN_REDUCER={
    LIST_USER: 'list_user'
}

const CART_REDUCER = 'cart';
export {AUTH_REDUCER, COURSE_REDUCER, PROFILE_REDUCER, CART_REDUCER, ADMIN_REDUCER}


 

/* =============* LOCALSTORAGE KEY CONSTANTS *============= */
const LOCAL_STORAGE_TOKEN_KEY= '@token';
const LOCAL_STORAGE_CREDENTIALS_KEY = '@credentials';
const LOCAL_STORAGE_COURSE_ID = '@courseID';
const LOCAL_STORAGE_CART = '@cart';
export {
    LOCAL_STORAGE_TOKEN_KEY, 
    LOCAL_STORAGE_CREDENTIALS_KEY,
    LOCAL_STORAGE_COURSE_ID,
    LOCAL_STORAGE_CART
}
