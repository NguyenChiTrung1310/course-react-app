import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseByCategory } from '../../features/course/CourseAction';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import imgContent from '../../assets/logo.png';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import useStyles from './useStyle';

function CourseCategory(props: any) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { match: { params: { maDanhMuc = '' } = {} } = {} } = props;

  const courseList = useSelector(
    (state: any) => state.course.coursesListByCategory.response
  );
  const status = useSelector(
    (state: any) => state.course.coursesListByCategory.status
  );

  useEffect(() => {
    dispatch(fetchCourseByCategory(maDanhMuc));
  }, [dispatch, maDanhMuc]);

  return (
    <div>
      {status === 200 ? (
        <Grid className={classes.root}>
          <Typography
            className={classes.titleCourse}
            color='textSecondary'
            gutterBottom
          >
            Our featured courses by category: {maDanhMuc}
          </Typography>
          <Grid className={classes.listCard} container spacing={3}>
            {courseList.map((item: any) => {
              const {
                tenKhoaHoc = 'ReactJs',
                maKhoaHoc = '',
                moTa = 'abc...',
                hinhAnh = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7',
                ngayTao = '',
                luotXem = '',
                biDanh = '',
              } = item;

              return (
                <Grid item xs={12} sm={12} md={3} key={maKhoaHoc}>
                  <Card className={clsx(classes.cardItem, 'card-item')}>
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
                    <Link to={`${maDanhMuc}/${maKhoaHoc}`}>
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
                    </Link>
                    <CardContent>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {moTa.slice(0, 100)}
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='span'
                        >
                          <Link to='#detail' className={classes.moreCard}>
                            ...more
                          </Link>
                        </Typography>
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
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ) : (
        <div>{maDanhMuc} category does not exist!</div>
      )}
    </div>
  );
}

export default CourseCategory;
