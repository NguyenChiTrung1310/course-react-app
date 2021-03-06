import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const useStyles: () => Record<
'menu' 
| 'menuItem' 
| 'iconItem' 
| 'linkItem', 
string> = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      top: '40px !important',
      left: '-5px !important',
      '& .MuiMenu-paper': {
        width: '200px',
      }
    },
    menuItem: {
      display: 'flex',
      alignItems:'center',
      paddingLeft: '60px'
    },
    linkItem: {
      paddingTop: '5px !important',
      paddingLeft: '5px !important',
    },
    iconItem: {
      width: '16px',
      height: '16px',
      marginTop: '3px',
    }
  })
);

export { useStyles as default };
