import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_profileuser.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import ViewComponent from './ViewComponent';
import EditComponent from './EditComponent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { stateEditButtonAction } from './../../features/Profile/profileUserAction';

function Profile(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const testEditButton = useSelector(
    (state: any) => state.profile.stateEditButton
  );

  useEffect(() => {
    return () => {
      dispatch(stateEditButtonAction(true));
    };
  }, []);

  function CoursePickup() {
    return (
      <>
        <Grid item xs={12}>
          <IconButton className={classes.root1}>
            <ShoppingCartIcon />
          </IconButton>
          <Box className={classes.paper}>
            <Box>
              <Typography
                variant='h3'
                color='primary'
                component='p'
                className={classes.head}>
                MY COURESE IS REGISTER
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                front end development
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                web design
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                Back end development
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                Database design
              </Typography>
            </Box>
          </Box>

          <Box className={classes.paper}>
            <Box>
              <Typography
                variant='h3'
                color='primary'
                component='p'
                className={classes.head}>
                WHAT CAN I DO{' '}
              </Typography>

              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Owning a lifetime course
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Certificate of completion
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Discount 10% more when paying online
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Box fontWeight='fontWeightLight' m={1}>
            <Typography className={classes.head} color='primary' component='p'>
              MY PROFILE
            </Typography>{' '}
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} spacing={2}>
          {testEditButton === true ? <ViewComponent /> : <EditComponent />}
        </Grid>

        <Grid item xs={6} sm={6} spacing={2}>
          <CoursePickup />
        </Grid>
      </Grid>
    </div>
  );
}
export default Profile;
