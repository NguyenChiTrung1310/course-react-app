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
| 'leftSection'
| 'content'
| 'description'
| 'tableStudent'
| 'information'
| 'course'
| 'courseTitle'
| 'courseContent'
| 'btn'
| 'btnAdd'
| 'btnBuy'
| 'paperSecond'
| 'learn'
| 'learnDetail'
| 'learnDescription'
| 'item'
, string>
 = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: 200,
        paddingTop: 100,
        height: '200vh'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    courseDetail: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginTop: '12px',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    leftSection: {
        // position: 'fixed',
        width: '500px',
    },
    content: {
        fontWeight: 500,
        paddingLeft: '50px',
        marginTop: '12px',
        paddingBottom: '5px'
    },
    description: {
        marginTop: '20px',
        color: 'rgba(0, 0, 0, 0.54);'
    },
    course: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
    },
    courseTitle: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    courseContent: {
        marginLeft: '20px',
        fontWeight: 'bold'
    },
    information: {
        height: '5vh',
        display: 'flex',
        marginTop: '10px',
        alignItems: 'center',
        paddingLeft: '18px'
    },
    tableStudent: {
        marginTop: '100px'
    },
    btn: {
        width: '100%',
        color: '#fff',
        margin: '10px 0',
        height: '50px'
    },
    btnAdd: {
        marginTop: '40px',
        backgroundColor: '#f50357',
    },
    btnBuy: {
        background: 'transparent',
        border: '1px solid #f50357',
        color: '#f50357',
        '&:hover': {
            background: 'transparent !important',
            color: '#f50357',
        }
    },
    paperSecond: {
        marginTop: '50px'
    },
    learn: {
        marginTop: '50px',
    },
    learnDetail: {
        fontWeight: 'bold'
    },
    learnDescription: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex',
    }
}));

export { useStyles as default };