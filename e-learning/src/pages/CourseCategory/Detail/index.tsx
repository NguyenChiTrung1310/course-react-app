import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchCourseDetail,
  fetchStudentsByCourse,
  registerCoursesAction,
} from '../../../features/course/CourseAction';
import Loading from '../../../components/Loading';

import {
  CardMedia,
  Grid,
  Typography,
  Paper,
  Container,
  Button,
} from '@material-ui/core';
import clsx from 'clsx';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DescriptionIcon from '@material-ui/icons/Description';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import imgContent from '../../../assets/logo.png';
import useStyles from './useStyles';
import './_courseDetail.scss';
import EnhancedTable from './components/TableStudents';
import MoreDetail from './components/MoreDetail';
import Modal from '../../../components/Modal';
import { toast } from 'react-toastify';
import { LOGIN_PAGE } from '../../../constants';
import { addToCart } from '../../../features/cart/CartSlice';

const CourseDetail = (props: any) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { match: { params: { maKhoaHoc = '' } = {} } = {} } = props;

  useEffect(() => {
    dispatch(fetchCourseDetail(maKhoaHoc));
  }, [dispatch, maKhoaHoc]);

  const statusCourseDetail = useSelector(
    (state: any) => state.course.courseDetailResponse.status
  );

  const statusRegisterCourse = useSelector(
    (state: any) => state.course.registerCourseResponse.status
  );

  useEffect(() => {
    if (statusCourseDetail === 200) {
      dispatch(fetchStudentsByCourse(maKhoaHoc));
    }
  }, [dispatch, maKhoaHoc, statusCourseDetail]);

  useEffect(() => {
    if (statusRegisterCourse === 200) {
      dispatch(fetchStudentsByCourse(maKhoaHoc));
    }
  }, [dispatch, maKhoaHoc, statusRegisterCourse]);

  const courseDetail = useSelector(
    (state: any) => state.course.courseDetailResponse.response
  );

  const statusLogin = useSelector(
    (state: any) => state.login.loginResponse.status
  );

  const account = useSelector(
    (state: any) => state.login.loginResponse.response.taiKhoan
  );

  const students = useSelector(
    (state: any) => state.course.studentByCourseResponse.response
  );

  const {
    maKhoaHoc: _maKhoaHoc = '',
    biDanh = '',
    // maNhom = '',
    tenKhoaHoc = '',
    moTa = '',
    luotXem = '',
    hinhAnh = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7',
    ngayTao = '',
    // soLuongHocVien = '',
    nguoiTao: { hoTen = '', tenLoaiNguoiDung = '', taiKhoan = '' } = {},
    danhMucKhoaHoc: { tenDanhMucKhoaHoc = '' } = {},
    error: { message = '' } = {},
  } = courseDetail;

  const dataArr = [
    {
      content: tenKhoaHoc,
      icon: 'COURSE',
    },
    {
      content: luotXem,
      icon: 'VIEWS',
    },
    {
      content: ngayTao,
      icon: 'DATE',
    },
    {
      content: hoTen,
      icon: 'TEACHER',
    },
    {
      content: taiKhoan,
      icon: 'ACCOUNT',
    },
    {
      content: tenLoaiNguoiDung,
      icon: 'TYPE',
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'COURSE':
        return <DescriptionIcon />;
      case 'VIEWS':
        return <VisibilityIcon />;
      case 'DATE':
        return <CloudDownloadIcon />;
      case 'STUDENT':
        return <GroupAddIcon />;
      case 'TEACHER':
        return <PermIdentityIcon />;
      case 'ACCOUNT':
        return <AccountCircleIcon />;
      default:
        return <CastForEducationIcon />;
    }
  };

  const str =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRegisterCourse = () => {
    const payload = {
      maKhoaHoc: _maKhoaHoc,
      taiKhoan: account ? account : '',
    };

    if (statusLogin === 200) {
      dispatch(registerCoursesAction(payload));
    } else {
      toast.error("You're not login account. Please try again !");
    }
    setOpen(false);
  };

  const handleLogin = () => {
    history.push(LOGIN_PAGE);
  };

  const handleAddToCart = () => {
    const addCourse = addToCart(courseDetail);

    dispatch(addCourse);
  };

  return (
    <div>
      {statusCourseDetail ? (
        <>
          {statusCourseDetail === 200 ? (
            <Grid className={classes.root}>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Course category: {tenDanhMucKhoaHoc}
              </Typography>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                container
                className={classes.courseDetail}
              >
                <Grid item xs={12} sm={12} md={4}>
                  <Paper
                    elevation={3}
                    className={`${classes.paper} ${classes.leftSection}`}
                  >
                    <Grid item xs={12} sm={12} md={12}>
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
                    <Container style={{ width: '85%' }}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Button
                          variant='contained'
                          className={`${classes.btn} ${classes.btnAdd}`}
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Button
                          variant='outlined'
                          className={`${classes.btn} ${classes.btnBuy}`}
                          onClick={handleClickOpen}
                        >
                          Buy Now
                        </Button>
                        <Modal
                          open={open}
                          handleClose={handleClose}
                          handleEvent={
                            statusLogin ? handleRegisterCourse : handleLogin
                          }
                          moDalTitle={
                            statusLogin
                              ? `Confirm to buy?`
                              : `Redirect to Login page ?`
                          }
                          className={`${classes.btn} ${classes.btnBuy}`}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        {dataArr.map((item, index) => (
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            key={index + 1}
                            className={classes.information}
                          >
                            {getIcon(item.icon)}
                            <Typography
                              className={clsx(classes.content, 'content')}
                              gutterBottom
                            >
                              {item.content === luotXem
                                ? `${item.content} views`
                                : item.content}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Container>
                  </Paper>
                  <EnhancedTable students={students} />
                </Grid>
                <Grid item xs={12} sm={12} md={1} />
                <Grid item xs={12} sm={12} md={7}>
                  <Paper elevation={3} className={classes.paper}>
                    <Grid item xs={12} sm={12} md={1} />
                    <Grid item xs={12} sm={12} md={10}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.course}
                      >
                        <Typography
                          gutterBottom
                          variant='h6'
                          className={clsx(classes.courseTitle, 'course-title')}
                        >
                          Course:
                        </Typography>
                        <Typography
                          gutterBottom
                          component={'span'}
                          variant='h6'
                          className={clsx(
                            classes.courseContent,
                            'course-content'
                          )}
                        >
                          {tenKhoaHoc}
                        </Typography>
                      </Grid>

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
                        {moTa.length > 4 ? `${moTa}. ${str}` : moTa}
                      </Typography>
                    </Grid>
                  </Paper>
                  <MoreDetail />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <div>Message: {message}</div>
          )}
        </>
      ) : (
        <Grid className={classes.loading}>
          <Loading />
        </Grid>
      )}
    </div>
  );
};

export default CourseDetail;
