import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
} from '@material-ui/core';
import {
  AccountBoxIcon,
  EmailIcon,
  GroupIcon,
  PhoneIcon,
  AccountCircleIcon,
  EditIcon,
  ImageIcon,
} from './icon';
import useStyles from './useStyles';
import {
  ProfileAction,
  stateEditButtonAction,
} from '../../../features/Profile/profileUserAction';
import Loading from './../../../components/Loading';
import { isEmpty } from 'lodash';
function ViewComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getERT = useSelector(
    (state: any) => state.profile.infoUserResponse.response
  );

  const stateGetProfileUser = useSelector(
    (state: any) => state.profile.infoUserResponse.status
  );

  const getToken = useSelector((state: any) => {
    if (!isEmpty(state.login.loginResponse.response)) {
      return state.login.loginResponse.response.accessToken;
    } else {
      return null;
    }
  });

  useEffect(() => {
    dispatch(ProfileAction(getToken));
  }, [dispatch, getToken]);

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
          <IconButton className={classes.root1} onClick={() => {}}>
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
