import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CopyRight from './components/CopyRight';
import useStyles from './useStyles';
import './_register.scss';

export default function RegisterPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      component='main'
      className={clsx(classes.root && 'register-page')}
    >
      <Grid item xs={12} sm={12} md={6} className='imageBanner' />
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' className={classes.title}>
            Register
          </Typography>
          <Grid item xs={12} sm={8} md={6} className={classes.formRegistration}>
            <form
              className={classes.form}
              noValidate
              //   onSubmit={handleSubmit}
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                className={classes.field}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                className={classes.field}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                // color='primary'
                className={classes.submit}
              >
                Sign up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href='#' variant='body2' className={classes.noteText}>
                    {'Have an account? Sign In'}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <CopyRight />
              </Box>
            </form>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
