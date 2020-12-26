import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles: () => Record<
'root'
| 'titleCourse'
| 'cardContainer'
| 'listCard'
| 'rootCard'
| 'avatar'
| 'media'
| 'expandOpen'
| 'expand'
| 'actionCard'
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
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridRowGap: '50px',
        gridColumnGap: '100px',
    },
    cardContainer:{
        maxWidth: '100%',
    },
    rootCard: {
        maxWidth: 345,
        width: 345,
        height: 420,
        overflow: 'scroll',
        boxShadow: '5px 8px 20px -8px rgba(82,82,82,1) !important',
        position: 'relative'
    },
    actionCard: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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