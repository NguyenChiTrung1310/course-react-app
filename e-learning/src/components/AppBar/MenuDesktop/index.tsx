import React, { FunctionComponent } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

type MenuProps = {
  menuId: string;
  anchorEl: any;
  handleMenuClose: any;
};

const MenuDesktop: FunctionComponent<MenuProps> = ({ menuId, anchorEl, handleMenuClose }) => {
  const isMenuOpen = Boolean(anchorEl);
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default MenuDesktop;
