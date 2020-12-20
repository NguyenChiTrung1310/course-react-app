import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import RegisterBanner from '../../assets/register-page.svg';

const useStyles: () => Record<
"root" 
| "image" 
| "paper" 
| "formRegistration" 
| "avatar" 
| "form" 
| "submit", string>
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export { useStyles as default };