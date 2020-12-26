import React, { useEffect } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import imgContent from '../../../../assets/logo.png';

import Loading from '../../../../components/Loading';
import useStyles from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseList } from '../../../../features/course/CourseAction';

const CourseList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const courseList = useSelector(
    (state: any) => state.course.courseListResponse.response
  );

  const fetchCourseStatus = useSelector(
    (state: any) => state.course.courseListResponse.status
  );

  useEffect(() => {
    dispatch(fetchCourseList());
  }, [dispatch]);

  return (
    <Grid className={classes.root}>
      <Typography
        className={classes.titleCourse}
        color='textSecondary'
        gutterBottom
      >
        Our featured courses
      </Typography>
      <Container maxWidth='lg' className={classes.cardContainer}>
        {fetchCourseStatus ? (
          <Grid className={classes.listCard}>
            {courseList.map((item: any, index: number) => {
              const {
                tenKhoaHoc = 'ReactJs',
                moTa = 'abc...',
                hinhAnh = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7',
                ngayTao = '',
                luotXem = '',
                biDanh = '',
              } = item;

              return (
                <Card className={classes.rootCard} key={index}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label='recipe' className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label='settings'>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={tenKhoaHoc}
                    subheader={ngayTao}
                  />
                  {hinhAnh.includes('.string') ? (
                    <CardMedia
                      className={classes.media}
                      image={imgContent}
                      title={biDanh}
                    />
                  ) : (
                    <CardMedia
                      className={classes.media}
                      image={hinhAnh}
                      title={biDanh}
                    />
                  )}
                  <CardContent>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {moTa.slice(0, 100)}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing className={classes.actionCard}>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {luotXem}
                      </Typography>
                      <IconButton aria-label='add to favorites'>
                        <VisibilityIcon />
                      </IconButton>
                    </Grid>
                    <Grid>
                      <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label='share'>
                        <ShareIcon />
                      </IconButton>
                    </Grid>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        ) : (
          <Loading />
        )}
      </Container>
    </Grid>
  );
};

export default CourseList;
