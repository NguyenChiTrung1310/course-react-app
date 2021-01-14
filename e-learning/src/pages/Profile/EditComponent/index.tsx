import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Button, InputAdornment } from '@material-ui/core';
import {
  stateEditButtonAction,
  updateProfileAction,
} from '../../../features/Profile/profileUserAction';
function EditComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getERT = useSelector(
    (state: any) => state.profile.infoUserResponse.response
  );
  // console.log('getERT', getERT);
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
    (state: any) => state.profile.stateEditButton
  );

  console.log('state of ViewC at EditC', testEditButton);
  function EditComponentChild() {
    const {
      chiTietKhoaHocGhiDanh = '',
      email = '',
      hoTen = '',
      maLoaiNguoiDung = '',
      maNhom = '',
      matKhau = '',
      soDT = '',
      taiKhoan = '',
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
      dispatch(updateProfileAction(field));
      dispatch(stateEditButtonAction(temp));
      // console.log('WHEN SUBMIT', field);
    };

    return (
      <>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              className={classes.root1}>
              Update
            </Button>
            <Box className={classes.paper}>
              <List className={classes.root}>
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
              </List>
            </Box>
          </form>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <EditComponentChild />
    </div>
  );
}
export default EditComponent;
