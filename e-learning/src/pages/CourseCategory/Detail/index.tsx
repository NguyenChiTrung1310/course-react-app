// @ts-ignore
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
  Button,
} from '@material-ui/core';
import clsx from 'clsx';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
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
    // maKhoaHoc: _maKhoaHoc = '',
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
                // data-wow-iteration='1'
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
                    // elevation={3}
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
                        >
                          Add to cart
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Button
                          variant='outlined'
                          className={`${classes.btn} ${classes.btnBuy}`}
                        >
                          Buy Now
                        </Button>
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
                              {item.content}
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
                        {moTa.length > 30 ? `${moTa}. ${str}` : moTa}
                      </Typography>
                    </Grid>
                  </Paper>
                  <MoreDetail />
                </Grid>
              </Grid>
              {/* <Container className={classes.tableStudent}>
                <EnhancedTable students={students} />
              </Container> */}
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
