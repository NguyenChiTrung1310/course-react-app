import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
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
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
    showPassword: boolean;
  };

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
      showPassword: false,
    });

    const handleChange = (e: any) => {
      setfield({
        ...field,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log('WHEN SUBMIT', field);
      dispatch(updateProfileAction(field));
      dispatch(stateEditButtonAction(true));
    };

    const handleClickShowPassword = () => {
      setfield({ ...field, showPassword: !field.showPassword });
    };

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    const dataProfileUser = [
      {
        label: 'Email',
        content: email,
        icon: 'emailIcon',
        key: 'email',
        placeholder: 'Your Email',
      },
      {
        label: 'Name',
        content: hoTen,
        icon: 'nameIcon',
        key: 'hoTen',
        placeholder: 'Your Name',
      },
      {
        label: 'Type User',
        content: maLoaiNguoiDung,
        icon: 'typeUserIcon',
        key: 'maLoaiNguoiDung',
        placeholder: 'Your Type User',
      },
      {
        label: 'Type Group',
        content: maNhom,
        icon: 'typeGroupIcon',
        key: 'maNhom',
        placeholder: 'Your Type Group',
      },
      {
        label: 'Passowrd',
        content: matKhau,
        icon: 'typeGroupIcon',
        key: 'matKhau',
        placeholder: 'Your Password',
      },
      {
        label: 'Phone Number',
        content: soDT,
        icon: 'phomeNumberIcon',
        key: 'soDT',
        placeholder: 'Your Phone Number',
      },
      {
        label: 'Account',
        content: taiKhoan,
        icon: 'accountIcon',
        key: 'taiKhoan',
        placeholder: 'Your Accpunt',
      },
    ];
    const renderIcon = (iconType: any) => {
      switch (iconType) {
        case 'email':
          return <EmailIcon />;
        case 'hoTen':
          return <AccountCircleIcon />;
        case 'maLoaiNguoiDung':
          return <ImageIcon />;
        case 'maNhom':
          return <GroupIcon />;
        case 'matKhau':
          return <VpnKeyIcon />;
        case 'soDT':
          return <PhoneIcon />;
        case 'taiKhoan':
          return <AccountBoxIcon />;
      }
    };
    return (
      <>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} style={{ marginTop: '-20px' }}>
            <Grid className={classes.paper}>
              <List className={classes.root}>
                {dataProfileUser.map((item) => {
                  const { label, content, key, placeholder } = item;
                  return (
                    <Grid key={label}>
                      <TextField
                        disabled={
                          key === 'maLoaiNguoiDung'
                            ? true
                            : key === 'taiKhoan'
                            ? true
                            : key === 'maNhom'
                            ? true
                            : false
                        }
                        className={classes.divider}
                        defaultValue={content}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id={key}
                        placeholder={placeholder}
                        name={key}
                        autoComplete={key}
                        autoFocus
                        type={
                          key === 'matKhau'
                            ? field.showPassword
                              ? 'text'
                              : 'password'
                            : 'text'
                        }
                        onChange={(event) => handleChange(event)}
                        InputProps={
                          key === 'matKhau'
                            ? {
                                startAdornment: (
                                  <InputAdornment position='start'>
                                    <Avatar className={classes.avatar}>
                                      {renderIcon(key)}
                                    </Avatar>
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment position='start'>
                                    <IconButton
                                      aria-label='toggle password visibility'
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      // edge="end"
                                    >
                                      {field.showPassword ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }
                            : {
                                startAdornment: (
                                  <InputAdornment position='start'>
                                    <Avatar className={classes.avatar}>
                                      {renderIcon(key)}
                                    </Avatar>
                                  </InputAdornment>
                                ),
                              }
                        }
                      />
                    </Grid>
                  );
                })}
              </List>
            </Grid>
            <div>
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                className={classes.root2}>
                Update
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                  dispatch(stateEditButtonAction(true));
                }}
                className={classes.root1}>
                Cancel
              </Button>
            </div>
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
