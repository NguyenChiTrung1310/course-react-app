import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles: () => Record<
'root' 
| 'title' 
| 'paper' 
| 'formRegistration' 
| 'avatar' 
| 'form' 
| 'field' 
| 'noteText' 
| 'submit', string>
 = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    margin: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formRegistration: {},
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
    backgroundColor: 'black',
    color: 'white'
  },
  field: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f50357',
    },
    '& .MuiOutlinedInput-input': {
      color: 'black',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'black',
    },
    '& .MuiInputLabel-outlined': {
      color: 'black',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: '#f50357',
    },

    // TextField select
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  noteText: {
      color: '#f50357'
  },
  title: {
      fontSize: '40px'
  },
}));

export { useStyles as default };