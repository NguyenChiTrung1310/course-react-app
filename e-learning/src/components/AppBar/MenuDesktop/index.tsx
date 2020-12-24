import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import {LOGIN_PAGE, REGISTER_PAGE} from '../../../constants'
import RegisterIcon from '../../../assets/registration.svg';
import LoginIcon from '../../../assets/signin.svg';
import PersonIcon from '@material-ui/icons/Person';
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
     <Link to={LOGIN_PAGE} style={{textDecoration: 'none', color: 'black'}}>
     <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <PersonIcon className={classes.iconItem} />
      {/* <MenuItem onClick={handleMenuClose} className={classes.menuItem}> */}
        <img src={LoginIcon} alt='register' className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          Login
        </Typography>
      </MenuItem>
     </Link>
      <Link to={REGISTER_PAGE} style={{textDecoration: 'none', color: 'black'}}>
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <img src={RegisterIcon} alt='register' className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          Register
        </Typography>
      </MenuItem>
      </Link>
    </Menu>
  );
};

export default MenuDesktop;
