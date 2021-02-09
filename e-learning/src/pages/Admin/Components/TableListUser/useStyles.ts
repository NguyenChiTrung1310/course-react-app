import {
    makeStyles,
    Theme,
} from '@material-ui/core/styles';

const useStyles: () => Record<
'table' 
|'root'
, string>
 = makeStyles((theme: Theme) => ({
    table: {
        minWidth: 650,
  },
  root: {
          flexShrink: 0,
          marginLeft: theme.spacing(2.5),
        },
 }));

 export { useStyles as default };