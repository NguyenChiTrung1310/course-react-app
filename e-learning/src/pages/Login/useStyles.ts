import { makeStyles, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#f50357',
    },   
    field: {
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#f50057',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#f50057',
        },
        '& .MuiOutlinedInput-input': {
          color: '#000',
        },
        '&:hover .MuiOutlinedInput-input': {
          color: '#000',
        },
        '& .MuiInputLabel-outlined': {
          color: '#000',
        },
        '&:hover .MuiInputLabel-outlined': {
          color: '#f50057',
        },
    }
  }));
 