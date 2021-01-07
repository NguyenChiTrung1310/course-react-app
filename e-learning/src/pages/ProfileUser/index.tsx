import React, { useState } from 'react';
import './_profileuser.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import ViewComponent from './ViewComponent';
import EditComponent from './EditComponent';


function ProfileUser(props: any) {
  const classes = useStyles();

  const [state, setState] = useState({
    stateEdit: false,
  });

  const handleEditButton = () => {
    console.log('onClick');
    setState((prevState) => ({
      stateEdit: !prevState.stateEdit,
    }));
    console.log(state);
  };

  function FormRowTwo() {
    return (
      <>
        <Grid item xs={12}>
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

        <Grid container item xs={6} sm={6} spacing={2}>
          <IconButton className={classes.root1} onClick={handleEditButton}>
            <EditIcon />
          </IconButton>
          {
            state.stateEdit === false ? (<ViewComponent />) : (<EditComponent />)
          }

        </Grid>

        <Grid container item direction='row' xs={6} sm={6} spacing={2}>
          <FormRowTwo />
        </Grid>
      </Grid>
    </div>
  );
}
export default ProfileUser;
