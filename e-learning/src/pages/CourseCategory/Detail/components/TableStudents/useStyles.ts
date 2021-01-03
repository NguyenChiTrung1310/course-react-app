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
, string>
 = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '400px',
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
}));

export { useStyles as default };