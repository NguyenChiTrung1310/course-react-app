import React, { FunctionComponent } from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import useStyles from './useStyles';

import RegisterIcon from '../../../assets/registration.svg';
import LoginIcon from '../../../assets/signin.svg';

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
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <img src={LoginIcon} alt='register' className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          Login
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <img src={RegisterIcon} alt='register' className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          Register
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default MenuDesktop;
