import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourseByCategory } from '../../features/course/CourseAction';

function CourseCategory(props: any) {
  const dispatch = useDispatch();
  const { match: { params: { maDanhMuc = '' } = {} } = {} } = props;

  useEffect(() => {
    dispatch(fetchCourseByCategory(maDanhMuc));
  }, [dispatch, maDanhMuc]);

  return <div>Category: {maDanhMuc}</div>;
}

export default CourseCategory;
