import React, { useEffect } from 'react';
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
import {
  ProfileAction,
  stateEditButtonAction,
} from '../../../features/Profile/profileUserAction';
import Loading from './../../../components/Loading';
import { isEmpty } from 'lodash';
function ViewComponent(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getERT = useSelector(
    (state: any) => state.profile.infoUserResponse.response
  );

  const stateGetProfileUser = useSelector(
    (state: any) => state.profile.infoUserResponse.status
  );

  // const getToken = useSelector(
  //   (state: any) => state.login.loginResponse.response.accessToken
  // );

  const getToken = useSelector((state: any) => {
    if (isEmpty(state.login.loginResponse.response)) {
      console.log('empty');
    } else {
      console.log('not emty');
      return state.login.loginResponse.response.accessToken;
    }
  });

  useEffect(() => {
    dispatch(ProfileAction(getToken));
  }, []);

  const handleClickEditButton = () => {
    dispatch(stateEditButtonAction(false));
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

    const dataArr1 = [
      {
        label: 'Email',
        content: email,
        icon: 'emailIcon',
      },
      {
        label: 'Name',
        content: hoTen,
        icon: 'nameIcon',
      },
      {
        label: 'Type User',
        content: maLoaiNguoiDung,
        icon: 'typeUserIcon',
      },
      {
        label: 'Type Group',
        content: maNhom,
        icon: 'typeGroupIcon',
      },
      {
        label: 'Phone Number',
        content: soDT,
        icon: 'phomeNumberIcon',
      },
      {
        label: 'Account',
        content: taiKhoan,
        icon: 'accountIcon',
      },
    ];

    const renderIcon = (iconType: any) => {
      switch (iconType) {
        case 'emailIcon':
          return <EmailIcon />;
        case 'nameIcon':
          return <AccountCircleIcon />;
        case 'typeUserIcon':
          return <ImageIcon />;
        case 'typeGroupIcon':
          return <GroupIcon />;
        case 'phomeNumberIcon':
          return <PhoneIcon />;
        case 'accountIcon':
          return <AccountBoxIcon />;
      }
    };

    return (
      <>
        <Grid item xs={12} sm={12}>
          <IconButton className={classes.root1}>
            <EditIcon onClick={handleClickEditButton} />
          </IconButton>
          <Box className={classes.paper}>
            <List className={classes.root}>
              {dataArr1.map((item) => {
                const { label, content, icon } = item;

                return (
                  <Grid key={label}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                          {renderIcon(icon)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={label} secondary={content} />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                  </Grid>
                );
              })}
            </List>
          </Box>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      {stateGetProfileUser === 200 ? (
        <ViewComponentChild />
      ) : (
        <Grid className={classes.loading}>
          <Loading />
        </Grid>
      )}
    </div>
  );
}
export default ViewComponent;
