import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

const useStyles: () => Record<
'root'
| 'title'
| 'courseDetail'
| 'media'
| 'paper'
| 'content'
| 'subtitle'
| 'description'
| 'information'
, string>
 = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: 200,
        paddingTop: 100,
        height: '100vh'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    courseDetail: {
        flexGrow: 1
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginTop: '12px',
    },
    paper: {
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap'
    },
    content: {
        fontWeight: 'bold',
    },
    subtitle: {
        paddingLeft: '50px',
        // textTransform: 'uppercase'
    },
    description: {
        marginTop: '50px',
        color: 'rgba(0, 0, 0, 0.54);'
    },
    information: {
        height: '5vh',
        display: 'flex',
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export { useStyles as default };