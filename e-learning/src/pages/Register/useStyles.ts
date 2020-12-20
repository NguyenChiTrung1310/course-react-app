import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import RegisterBanner from '../../assets/register-page.svg';

const useStyles: () => Record<
'root' 
| 'image' 
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
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    backgroundImage: `url(${RegisterBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  },
  noteText: {
      color: '#f50357'
  },
  title: {
      fontSize: '40px'
  }
}));

export { useStyles as default };