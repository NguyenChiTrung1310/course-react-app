//USER AUTH
const LOGIN_API= 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap'
const REGISTER_API= 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy'

// COURSE
const COURSE_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
const COURSE_CATEGORY_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
const COURSE_BY_CATEGORY_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=GP01&maDanhMuc=';
const COURSE_DETAIL_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc='
const STUDENTS_BY_COURSE_API = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=';

//INFOR USER
const INFOR_USER="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung";

export {
    LOGIN_API, 
    REGISTER_API,
    COURSE_API,
    COURSE_CATEGORY_API,
    COURSE_BY_CATEGORY_API,
    COURSE_DETAIL_API,
    STUDENTS_BY_COURSE_API,
    INFOR_USER
}
