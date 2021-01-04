import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { LOGIN_PAGE, REGISTER_PAGE, HOME_PAGE } from '../../../constants';
import RegisterIcon from '../../../assets/registration.svg';
import LoginIcon from '../../../assets/signin.svg';
import { toast } from 'react-toastify';
type MenuProps = {
  menuId: string;
  anchorEl: any;
  handleMenuClose: any;
};

const MenuDesktop: FunctionComponent<MenuProps> = ({
  menuId,
  anchorEl,
  handleMenuClose,
}) => {
  const isMenuOpen = Boolean(anchorEl);
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state: any) => state.login.loginResponse.status
  );

  const loginData = useSelector(
    (state: any) => state.login.loginResponse.response
  );
  const logOut = () => {
    return {
      type: 'CLEAR_STORE',
    };
  };
  const onClickLogout = (e: any) => {
    e.preventDefault();
    dispatch(logOut());
    toast.success('Đăng xuất thành công');
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menu}
    >
      {loginStatus === 200 ? (
        <div>
          <Link
            to={LOGIN_PAGE}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
              {/* <PersonIcon className={classes.iconItem} /> */}
              {/* <MenuItem onClick={handleMenuClose} className={classes.menuItem}> */}
              <img
                src={LoginIcon}
                alt='register'
                className={classes.iconItem}
              />
              <Typography component='span' className={classes.linkItem}>
                {loginData.taiKhoan}
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to={HOME_PAGE}
            onClick={onClickLogout}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
              <img
                src={RegisterIcon}
                alt='register'
                className={classes.iconItem}
              />
              <Typography component='span' className={classes.linkItem}>
                Logout
              </Typography>
            </MenuItem>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to={LOGIN_PAGE}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
              {/* <MenuItem onClick={handleMenuClose} className={classes.menuItem}> */}
              <img
                src={LoginIcon}
                alt='register'
                className={classes.iconItem}
              />
              <Typography component='span' className={classes.linkItem}>
                Login
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to={REGISTER_PAGE}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
              <img
                src={RegisterIcon}
                alt='register'
                className={classes.iconItem}
              />
              <Typography component='span' className={classes.linkItem}>
                Register
              </Typography>
            </MenuItem>
          </Link>
        </div>
      )}
    </Menu>
  );
};

export default MenuDesktop;
