import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'; 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontWeight: 'fontWeightBold',
    fontSize: '24px',
  },
  button: {
    margin: theme.spacing(1),
    padding: '43px',
    fontSize: '72px',
    '&:hover': {
      background: '#3f51b5',
      color: 'white',
    },
  },
  head: {
    fontSize: '32px',
    variant: 'h2',
  },
}));

export default function ProfileUser() {
  const classes = useStyles();
  
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}> 
          <Box className={classes.paper}>
          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="NAME : " secondary="JIRAWAT KAEWKULLABUT" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FREELANCE" secondary="Available" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="EMAIL" secondary="Jirawatk1999@hotmail.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DATE OF BIRTH" secondary="01 Aug 1999" />
      </ListItem>
    </List>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <Box>
              <Typography variant='h4' color='primary' component='p'>
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
              <Typography variant='h4' color='primary' component='p'>
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
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Box fontWeight='fontWeightLight' m={1}>
            <Typography className={classes.head} color='primary' component='p'>
              MY PROFILE
            </Typography>{' '}
          </Box>
        </Grid>

        <Grid container item xs={6} sm={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction='row' xs={6} sm={6} spacing={2}>
          <FormRowTwo />
        </Grid>
      </Grid>
    </div>
  );
}
