import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './_viewProfileUser.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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


function ViewComponent(props: any) {
  const classes = useStyles();


  const dataofUser = useSelector((state: any) => state.login.loginResponse.response);
  console.log("dataofUser", dataofUser);



  function FormRow() {
    const { email = 'user@gmail',
      hoTen = 'NOT FOUND',
      maLoaiNguoiDung = 'NOT FOUND',
      maNhom = 'NOT FOUND',
      soDT = 'NOT FOUND',
      taiKhoan = 'NOT FOUND',
    } = dataofUser;
    return (
      <>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='EMAIL'
                  secondary={email}
                />
              </ListItem>
              <Divider variant='inset' component='li' className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='ACCOUNT' secondary={taiKhoan} />
              </ListItem>
              <Divider variant='inset' component='li' className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='NAME' secondary={hoTen} />
              </ListItem>
              <Divider variant='inset' component='li' className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountBoxIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE USER' secondary={maLoaiNguoiDung} />
              </ListItem>
              <Divider variant='inset' component='li' className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <GroupIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE GROUP' secondary={maNhom} />
              </ListItem>
              <Divider variant='inset' component='li' className={classes.divider} />
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
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Box fontWeight='fontWeightLight' m={1}>
            {/* <Typography className={classes.head} color='primary' component='p'>
              MY PROFILE
            </Typography>{' '} */}
          </Box>
        </Grid>

        <Grid container item xs={6} sm={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction='row' xs={6} sm={6} spacing={2}>
          {/* <FormRowTwo /> */}
        </Grid>
      </Grid>
    </div>
  );
}
export default ViewComponent;
