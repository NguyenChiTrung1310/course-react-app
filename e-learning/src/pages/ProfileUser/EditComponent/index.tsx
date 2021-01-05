import React from 'react';
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
import { IconButton } from '@material-ui/core';
function EditComponent() {
  const classes = useStyles();
  function FormRow() {
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
                  secondary='Jirawatk1999@hotmail.com'
                />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='ACCOUNT' secondary='ha.ng' />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='NAME : ' secondary='Mark Law' />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <AccountBoxIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE USER' secondary='HV' />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <GroupIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TYPE GROUP' secondary='GP01' />
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='PHONE' secondary='0792085641' />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </>
    );
  }

  /**
  function FormRowTwo() {
    return (
      <>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <Box>
              <Typography
                variant='h3'
                color='primary'
                component='p'
                className={classes.head}>
                MY COURESE IS REGISTER
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                front end development
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                web design
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                Back end development
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' color='textSecondary' component='p'>
                Database design
              </Typography>
            </Box>
          </Box>

          <Box className={classes.paper}>
            <Box>
              <Typography
                variant='h3'
                color='primary'
                component='p'
                className={classes.head}>
                WHAT CAN I DO{' '}
              </Typography>

              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Owning a lifetime course
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Certificate of completion
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' color='textSecondary' component='p'>
                  Discount 10% more when paying online
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </>
    );
  }
 */
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
export default EditComponent;
