import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './_viewProfile.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { stateEditButtonAction } from '../../../features/Profile/profileUserAction';

function ViewComponent(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    stateEditButton: false,
  });
  const getERT = useSelector(
    (state: any) => state.profile.infoUserResponse.response
  );

  const handleClickEditButton = () => {
    setState((prevState) => ({
      stateEditButton: !prevState.stateEditButton,
    }));
    dispatch(stateEditButtonAction(state));
  };

  function ViewComponentChild() {
    const {
      email = '',
      hoTen = '',
      maLoaiNguoiDung = '',
      maNhom = '',
      soDT = '',
      taiKhoan = '',
    } = getERT;

    return (
      <>
        <Grid item xs={12}>
          <IconButton className={classes.root1}>
            <EditIcon onClick={handleClickEditButton} />
          </IconButton>
          <Box className={classes.paper}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='EMAIL' secondary={email} />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                className={classes.divider}
              />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='ACCOUNT' secondary={taiKhoan} />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                className={classes.divider}
              />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='NAME' secondary={hoTen} />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                className={classes.divider}
              />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountBoxIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE USER' secondary={maLoaiNguoiDung} />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                className={classes.divider}
              />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <GroupIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE GROUP' secondary={maNhom} />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                className={classes.divider}
              />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='PHONE' secondary={soDT} />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <ViewComponentChild />
    </div>
  );
}
export default ViewComponent;
