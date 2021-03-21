//USER AUTH
const LOGIN_API= 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap'
const REGISTER_API= 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy'

// COURSE
const COURSE_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
const COURSE_CATEGORY_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
const COURSE_BY_CATEGORY_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01&maDanhMuc=';
const COURSE_DETAIL_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc='
const STUDENTS_BY_COURSE_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=';

//USER
const PROFILE_API="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung";
const UPDATE_PROFILE_API="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
const REGISTER_COURSE_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc';

//ADMIN 
const LIST_USER_API='https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05'; 
const LIST_PAGINATED_USER_API='https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP03&pageSize=4&page='; 
const SEARCH_USER_API='https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/MaNhom=GP01?TimKiemNguoiDung=';

export {
    LOGIN_API, 
    REGISTER_API,
    COURSE_API,
    COURSE_CATEGORY_API,
    COURSE_BY_CATEGORY_API,
    COURSE_DETAIL_API,
    STUDENTS_BY_COURSE_API,
    PROFILE_API,
    UPDATE_PROFILE_API,
    REGISTER_COURSE_API,
    LIST_USER_API,
    LIST_PAGINATED_USER_API,
    SEARCH_USER_API
}
