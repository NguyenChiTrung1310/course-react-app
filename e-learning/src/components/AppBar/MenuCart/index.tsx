import React, { FunctionComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Menu, { MenuProps } from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { StyledMenuItem } from './useStyle';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

type CartProps = {
  cartId: string;
  anchorCart: any;
  handleCloseCartIcon: any;
};

const CartPopup: FunctionComponent<CartProps> = ({
  cartId,
  anchorCart,
  handleCloseCartIcon,
}) => {
  return (
    <div>
      <StyledMenu
        id={cartId}
        anchorEl={anchorCart}
        keepMounted
        open={Boolean(anchorCart)}
        onClose={handleCloseCartIcon}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Sent mail' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default CartPopup;
