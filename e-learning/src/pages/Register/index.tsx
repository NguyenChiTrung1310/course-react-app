import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  MenuItem,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import clsx from 'clsx';

import CopyRight from './components/CopyRight';
import HandleRegisterForm from '../../utils/Validation';
import { Link, useHistory } from 'react-router-dom';
import { registerAction } from '../../features/register/RegisterAction';

import useStyles from './useStyles';
import './_register.scss';
import { useDispatch } from 'react-redux';
import { LOGIN_PAGE } from '../../constants';

type FieldStates = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDt: string;
  email: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};

export default function RegisterPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [group, setGroup] = useState('');
  const [checkField, setCheckField] = useState(true);
  const [field, setField] = useState<FieldStates>({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    soDt: '',
    email: '',
    maNhom: '',
    maLoaiNguoiDung: 'HV',
  });

  const groups = [
    {
      value: 'gp01',
      label: 'GP01',
    },
    {
      value: 'gp02',
      label: 'GP02',
    },
    {
      value: 'gp03',
      label: 'GP03',
    },
    {
      value: 'gp04',
      label: 'GP04',
    },
    {
      value: 'gp05',
      label: 'GP05',
    },
    {
      value: 'gp06',
      label: 'GP06',
    },
  ];

  const fields = [
    {
      id: 'taiKhoan',
      label: 'Account',
      name: 'taiKhoan',
      autoComplete: 'taiKhoan',
      type: 'text',
      autoFocus: true,
    },
    {
      id: 'matKhau',
      label: 'Password',
      name: 'matKhau',
      autoComplete: 'matKhau',
      type: 'password',
      autoFocus: false,
    },
    {
      id: 'hoTen',
      label: 'Full name',
      name: 'hoTen',
      autoComplete: 'hoTen',
      type: 'text',
      autoFocus: false,
    },
    {
      id: 'soDt',
      label: 'Phone number',
      name: 'soDt',
      autoComplete: 'soDt',
      type: 'text',
      autoFocus: false,
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      autoComplete: 'email',
      type: 'text',
      autoFocus: false,
    },
  ];

  useEffect(() => {
    const {
      taiKhoan,
      matKhau,
      hoTen,
      soDt,
      email,
      maNhom,
      maLoaiNguoiDung,
    } = field;
    let check = true;

    if (
      taiKhoan.trim() !== '' &&
      matKhau.trim() !== '' &&
      hoTen.trim() !== '' &&
      soDt.trim() !== '' &&
      email.trim() !== '' &&
      maLoaiNguoiDung.trim() !== '' &&
      maNhom !== ''
    ) {
      check = false;
    } else {
      check = true;
    }
    setCheckField(check);
  }, [field]);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup(event.target.value);
    setField({
      ...field,
      maNhom: event.target.value,
    });
  };

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dataRegister = field;

    const redirect = () => {
      return history.push(LOGIN_PAGE);
    };

    const validate = HandleRegisterForm(dataRegister);
    if (validate === 1) {
      dispatch(registerAction(dataRegister, redirect));
    }
  };

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
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              {fields.map((option, index) => (
                <TextField
                  key={index}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id={option.id}
                  label={option.label}
                  name={option.name}
                  autoComplete={option.autoComplete}
                  type={option.type}
                  autoFocus={option.autoFocus}
                  className={classes.field}
                  onChange={handleChangeField}
                />
              ))}
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='maNhom'
                select
                label='Select'
                name='maNhom'
                autoComplete='maNhom'
                value={group}
                onChange={handleChangeSelect}
                helperText='Please select your group'
                className={classes.field}
              >
                {groups.map((option: any, index: number) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                disabled={checkField}
                className={classes.submit}
              >
                Sign up
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={LOGIN_PAGE} className={classes.noteText}>
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
