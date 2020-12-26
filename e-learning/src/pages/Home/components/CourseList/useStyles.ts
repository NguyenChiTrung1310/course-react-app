import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

const useStyles: () => Record<
'root'
| 'titleCourse'
| 'listCard'
| 'rootCard'
| 'avatar'
| 'media'
| 'expandOpen'
| 'expand'
, string>
 = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: 200,
        paddingTop: 100,
    },
    titleCourse: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listCard: {
        maxWidth: '90%'
    },
    rootCard: {
        maxWidth: 345,
        boxShadow: '5px 8px 20px -8px rgba(82,82,82,1) !important'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export { useStyles as default };