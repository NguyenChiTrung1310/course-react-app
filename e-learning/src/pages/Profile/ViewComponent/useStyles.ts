import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';



const useStyles: () => Record<
  'root'
  | 'root1'
  | 'paper'
  | 'head'
  | 'avatar'
  | 'divider',
  string> = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: 'relative',
      },
      root1: {
        position: 'absolute',
        right: '0px',
        backgroundColor: theme.palette.secondary.main,
        zIndex: 100,
        color: 'white',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        // fontWeight: 'fontWeightBold',
        fontSize: '24px',
      },
      head: {
        fontSize: '32px',
        variant: 'h2',
        color: '#f50357',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      divider: {
        width: '80vh',
      }
    })
  );

export { useStyles as default };