import {
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

const useStyles: () => Record<
'root'
| 'paper'
| 'table'
| 'visuallyHidden'
| 'tblHead'
| 'tblHeadCell'
| 'tblBody'
| 'tblHeadTitle'
| 'tblRowContent'
| 'tblPagination'
| 'noData'
| 'noDataIcon'
, string>
 = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '500px',
      marginTop: '100px'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 150,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    tblHead: {
      backgroundColor: '#f50357',
    },
    tblHeadTitle: {
      color: '#fff'
    },
    tblRowContent: {
      paddingLeft: '14px'
    },
    tblPagination: {
      backgroundColor: '#f50357',
    },
    tblHeadCell: {
      paddingLeft: '14px'
    },
    noData: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    noDataIcon: {
      fontSize: '50px'
    },
    tblBody: {
      position: 'relative'
    }
}));

export { useStyles as default };