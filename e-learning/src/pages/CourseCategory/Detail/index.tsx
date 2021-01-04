import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCourseDetail,
  fetchStudentsByCourse,
} from '../../../features/course/CourseAction';
import Loading from '../../../components/Loading';

import {
  CardMedia,
  Grid,
  Typography,
  Paper,
  Container,
} from '@material-ui/core';
import clsx from 'clsx';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import imgContent from '../../../assets/logo.png';
import useStyles from './useStyles';
import './_courseDetail.scss';
import EnhancedTable from './components/TableStudents';

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

  useEffect(() => {
    if (status === 200) {
      dispatch(fetchStudentsByCourse(maKhoaHoc));
    }
  }, [dispatch, maKhoaHoc, status]);

  const courseDetail = useSelector(
    (state: any) => state.course.courseDetailResponse.response
  );

  const students = useSelector(
    (state: any) => state.course.studentByCourseResponse.response
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
      label: '',
      content: tenKhoaHoc,
      icon: 'COURSE',
    },
    {
      label: 'View',
      content: luotXem,
      icon: 'VIEWS',
    },
    {
      label: 'Create at',
      content: ngayTao,
      icon: 'DATE',
    },
    {
      label: 'Student',
      content: soLuongHocVien,
      icon: 'STUDENT',
    },
  ];

  const teacher = [
    {
      label: 'Teacher',
      content: hoTen,
      icon: 'TEACHER',
    },
    {
      label: 'Account',
      content: taiKhoan,
      icon: 'ACCOUNT',
    },
    {
      label: 'Type of user',
      content: tenLoaiNguoiDung,
      icon: 'TYPE',
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'COURSE':
        return <Typography>Course</Typography>;
      case 'VIEWS':
        return <Typography>Views</Typography>;
      case 'DATE':
        return <Typography>Create at</Typography>;
      case 'STUDENT':
        return <GroupAddIcon />;
      case 'TEACHER':
        return <AccountBoxIcon />;
      case 'ACCOUNT':
        return <AccountCircleIcon />;
      default:
        return <CastForEducationIcon />;
    }
  };

  const str =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
                Course category: {tenDanhMucKhoaHoc}
              </Typography>
              <Container className={classes.courseDetail}>
                <Paper elevation={3} className={classes.paper}>
                  <Grid item xs={12} sm={12} md={1} />
                  <Grid item xs={12} sm={12} md={5}>
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
                  <Grid item xs={12} sm={12} md={3}>
                    {dataArr.map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        key={index + 1}
                        className={classes.information}
                      >
                        {getIcon(item.icon)}
                        <Typography
                          className={clsx(classes.content, 'content')}
                          gutterBottom
                        >
                          {item.content}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    {teacher.map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        key={index + 1}
                        className={classes.information}
                      >
                        {getIcon(item.icon)}
                        <Typography
                          className={clsx(classes.content, 'content')}
                          gutterBottom
                        >
                          {item.content === tenKhoaHoc
                            ? `${item.content} (${_maKhoaHoc})`
                            : item.content}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={12} md={1} />
                  <Grid item xs={12} sm={12} md={10}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      className={clsx(classes.description, 'description')}
                    >
                      Description:
                    </Typography>
                    <Typography
                      gutterBottom
                      variant='h6'
                      className='description-content'
                    >
                      {moTa.length > 30 ? `${moTa}. ${str}` : moTa}
                    </Typography>
                  </Grid>
                </Paper>
              </Container>
              <Grid>
                <EnhancedTable students={students} />
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
