import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetail } from '../../../features/course/CourseAction';
import Loading from '../../../components/Loading';
import useStyles from './useStyles';

const CourseDetail = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { match: { params: { maKhoaHoc = '' } = {} } = {} } = props;

  useEffect(() => {
    dispatch(fetchCourseDetail(maKhoaHoc));
  }, [dispatch, maKhoaHoc]);

  const status = useSelector(
    (state: any) => state.course.courseDetailResponse.status
  );
  const courseDetail = useSelector(
    (state: any) => state.course.courseDetailResponse.response
  );

  const {
    maKhoaHoc: _maKhoaHoc = '',
    biDanh = '',
    tenKhoaHoc = '',
    moTa = '',
    luotXem = '',
    hinhAnh = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7',
    ngayTao = '',
    soLuongHocVien = '',
    nguoiTao = {},
    danhMucKhoaHoc = {},
    error: { message = '' } = {},
  } = courseDetail;

  return (
    <div>
      {status ? (
        <>
          {status === 200 ? (
            <div>Course: {tenKhoaHoc}</div>
          ) : (
            <div>Message: {message}</div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CourseDetail;
