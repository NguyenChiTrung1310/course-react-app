import React from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './useStyles';

const CourseDetail = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    match: { params: { maDanhMucKhoahoc = '', maKhoaHoc = '' } = {} } = {},
  } = props;

  console.log(maDanhMucKhoahoc);
  console.log(maKhoaHoc);

  return <div>Detail page</div>;
};

export default CourseDetail;
