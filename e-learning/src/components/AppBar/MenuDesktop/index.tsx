import React, { FunctionComponent } from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import useStyles from './useStyles';

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
        <PersonIcon className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          Profile
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <OndemandVideoRoundedIcon className={classes.iconItem} />
        <Typography component='span' className={classes.linkItem}>
          My courses
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default MenuDesktop;
