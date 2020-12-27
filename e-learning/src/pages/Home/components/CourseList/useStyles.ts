import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles: () => Record<
'root'
| 'titleCourse'
| 'listCard'
| 'cardItem'
| 'avatar'
| 'media'
| 'actionCard'
| 'moreCard'
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
      flexGrow: 1
    },
    cardItem: {
        height: 450,
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
    avatar: {
        backgroundColor: red[500],
    },
    moreCard: {
        textDecoration: 'none',
        color: '#6C63FF',
        fontWeight: 600
    }
}));

export { useStyles as default };