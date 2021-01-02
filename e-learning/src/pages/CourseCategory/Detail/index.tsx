import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetail } from '../../../features/course/CourseAction';
import Loading from '../../../components/Loading';

import {
  CardMedia,
  Grid,
  Typography,
  Paper,
  Container,
} from '@material-ui/core';

import imgContent from '../../../assets/logo.png';
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
    maNhom = '',
    tenKhoaHoc = '',
    moTa = '',
    luotXem = '',
    hinhAnh = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7',
    ngayTao = '',
    soLuongHocVien = '',
    nguoiTao: { hoTen = '', tenLoaiNguoiDung = '', taiKhoan = '' } = {},
    danhMucKhoaHoc: { tenDanhMucKhoaHoc = '' } = {},
    error: { message = '' } = {},
  } = courseDetail;

  const dataArr = [
    {
      label: 'Course Id',
      content: _maKhoaHoc,
    },
    {
      label: 'Couese category',
      content: tenDanhMucKhoaHoc,
    },
    {
      label: 'Group Id',
      content: maNhom,
    },
    {
      label: 'View',
      content: luotXem,
    },
    {
      label: 'Create at',
      content: ngayTao,
    },
    {
      label: 'Student',
      content: soLuongHocVien,
    },
    {
      label: 'Teacher',
      content: hoTen,
    },
    {
      label: 'Account',
      content: taiKhoan,
    },
    {
      label: 'Type of user',
      content: tenLoaiNguoiDung,
    },
  ];

  return (
    <div>
      {status ? (
        <>
          {status === 200 ? (
            <Grid className={classes.root}>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Course: {tenKhoaHoc}
              </Typography>
              <Grid className={classes.courseDetail} container spacing={3}>
                <Grid item xs={12} sm={12} md={12} key={maKhoaHoc}>
                  {/* <Paper className={clsx(classes.cardItem, 'card-item')}> */}
                  <Paper elevation={3} className={classes.paper}>
                    <Grid xs={12} sm={12} md={1} />
                    <Grid xs={12} sm={12} md={6}>
                      {hinhAnh.includes('.string') ? (
                        <Paper elevation={3}>
                          <CardMedia
                            className={classes.media}
                            image={imgContent}
                            title={biDanh}
                          />
                        </Paper>
                      ) : (
                        <Paper elevation={3}>
                          <CardMedia
                            className={classes.media}
                            image={hinhAnh}
                            title={biDanh}
                          />
                        </Paper>
                      )}
                    </Grid>
                    <Grid xs={12} sm={12} md={5}>
                      {dataArr.map((item, index) => (
                        <Grid
                          xs={12}
                          sm={12}
                          md={12}
                          key={index + 1}
                          className={classes.information}
                        >
                          <Grid xs={12} sm={12} md={6}>
                            <Typography
                              className={classes.subtitle}
                              color='textSecondary'
                              gutterBottom
                              variant='h6'
                            >
                              {item.label}
                            </Typography>
                          </Grid>
                          <Grid xs={12} sm={12} md={6}>
                            <Typography
                              className={classes.content}
                              gutterBottom
                              variant='h6'
                            >
                              {item.content}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid xs={12} sm={12} md={1} />
                    <Grid xs={12} sm={12} md={10}>
                      {/* <Grid xs={12} sm={12} md={1} />
                      <Grid xs={12} sm={12} md={10}> */}
                      <Typography
                        // className={classes.content}
                        gutterBottom
                        variant='h6'
                      >
                        {moTa}
                      </Typography>
                      {/* </Grid>
                      <Grid xs={12} sm={12} md={1} /> */}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
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
