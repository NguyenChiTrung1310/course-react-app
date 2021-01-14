import React, { useState, useEffect } from 'react';
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
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import {
  stateEditButtonAction,
  updateProfileUserAction,
} from './../../../features/profileUser/profileUserAction';
function EditComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const dataofUser = useSelector(
  //   (state: any) => state.login.loginResponse.response
  // );
  // console.log('dataofUser', dataofUser);

  const getERT = useSelector(
    (state: any) => state.infoUser.infoUserResponse.response
  );
  console.log('OOO', getERT);
  type FieldStates = {
    email: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    maNhom: string;
    matKhau: string;
    soDT: string;
    taiKhoan: string;
  };
  const testEditButton = useSelector(
    (state: any) => state.infoUser.stateEditButton
  );

  console.log('state of ViewC at EditC', testEditButton);
  function FormRow() {
    const {
      chiTietKhoaHocGhiDanh = 'Please login',
      email = 'Please login',
      hoTen = 'Please login',
      maLoaiNguoiDung = 'Please login',
      maNhom = 'Please login',
      matKhau = 'Please login',
      soDT = 'Please login',
      taiKhoan = 'Please login',
    } = getERT;

    const [field, setfield] = useState<FieldStates>({
      email: email,
      hoTen: hoTen,
      maLoaiNguoiDung: maLoaiNguoiDung,
      maNhom: maNhom,
      matKhau: matKhau,
      soDT: soDT,
      taiKhoan: taiKhoan,
    });

    const handleChange = (e: any) => {
      setfield({
        ...field,
        [e.target.name]: e.target.value,
      });
    };
    const temp = {
      stateEditButton: !testEditButton,
    };
    const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(updateProfileUserAction(field));
      dispatch(stateEditButtonAction(temp));
      console.log('WHEN SUBMIT', field);
    };

    return (
      <>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <List className={classes.root}>
              <form onSubmit={handleSubmit}>
                <TextField
                  className={classes.divider}
                  defaultValue={email}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  placeholder='Your Account'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  onChange={(event) => handleChange(event)}
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
                  className={classes.divider}
                  defaultValue={taiKhoan}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='taiKhoan'
                  placeholder='Your Account'
                  id='taiKhoan'
                  autoComplete='taiKhoan'
                  onChange={(event) => handleChange(event)}
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
                  className={classes.divider}
                  defaultValue={matKhau}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='matKhau'
                  placeholder='Your Password'
                  id='matKhau'
                  autoComplete='matKhau'
                  onChange={(event) => handleChange(event)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Avatar className={classes.avatar}>
                          <VpnKeyIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.divider}
                  defaultValue={hoTen}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='hoTen'
                  placeholder='Name User'
                  id='hoTen'
                  autoComplete='hoTen'
                  onChange={(event) => handleChange(event)}
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
                  className={classes.divider}
                  defaultValue={maLoaiNguoiDung}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='maLoaiNguoiDung'
                  placeholder='Type User'
                  id='maLoaiNguoiDung'
                  autoComplete='maLoaiNguoiDung'
                  onChange={(event) => handleChange(event)}
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
                  className={classes.divider}
                  defaultValue={maNhom}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='maNhom'
                  placeholder='Type Group'
                  id='maNhom'
                  autoComplete='maNhom'
                  onChange={(event) => handleChange(event)}
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
                  className={classes.divider}
                  defaultValue={soDT}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='soDT'
                  placeholder='Phone Number'
                  id='soDT'
                  autoComplete='soDT'
                  onChange={(event) => handleChange(event)}
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
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='secondary'>
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
