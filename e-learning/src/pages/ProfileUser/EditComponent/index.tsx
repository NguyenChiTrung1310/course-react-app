import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ProfileUser from '..';

import {
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';



function EditComponent() {
  const classes = useStyles();

  const dataofUser = useSelector((state: any) => state.login.loginResponse.response);
  console.log("dataofUser", dataofUser);

  function FormRow() {
    const { email = 'user@gmail',
      hoTen = 'NOT FOUND',
      maLoaiNguoiDung = 'NOT FOUND',
      maNhom = 'NOT FOUND',
      soDT = 'NOT FOUND',
      taiKhoan = 'NOT FOUND',
    } = dataofUser;
    // console.log("DATA EDIT COMPONENT", dataofUser);
    // <ProfileUser {...dataofUser} />



    return (
      <>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <List className={classes.root}>
              <form  >
                <TextField
                  defaultValue={email}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='Email'
                  placeholder='Your Account'
                  name='Email'
                  autoComplete='Email'
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <EmailIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  defaultValue={taiKhoan}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='taiKhoan'
                  placeholder='Your Account'
                  id='taiKhoan'
                  autoComplete='taiKhoan'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <AccountCircleIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  defaultValue={hoTen}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='hoTen'
                  placeholder='Name User'
                  id='hoTen'
                  autoComplete='hoTen'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <ImageIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />


                <TextField
                  defaultValue={maLoaiNguoiDung}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='maLoaiNguoiDung'
                  placeholder='Type User'
                  id='maLoaiNguoiDung'
                  autoComplete='maLoaiNguoiDung'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <AccountBoxIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  defaultValue={maNhom}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='maNhom'
                  placeholder='Type Group'
                  id='maNhom'
                  autoComplete='maNhom'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <GroupIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  defaultValue={soDT}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='soDT'
                  placeholder='Phone Number'
                  id='soDT'
                  autoComplete='soDT'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <PhoneIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  // type='submit'
                  fullWidth
                  variant='contained'
                  color='secondary' >
                  Save
              </Button>
              </form>
            </List>
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
            {/* <Typography className={classes.head} color='primary' component='p'>
              MY PROFILE
            </Typography>{' '} */}
          </Box>
        </Grid>

        <Grid container item xs={6} sm={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction='row' xs={6} sm={6} spacing={2}>
          {/* <FormRowTwo /> */}
        </Grid>
      </Grid>
    </div>
  );
}
export default EditComponent;
