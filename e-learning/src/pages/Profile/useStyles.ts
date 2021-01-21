import {
    makeStyles,  
    Theme,
    createStyles, 
  } from '@material-ui/core/styles'; 
  // import { green, blue, yellow } from '@material-ui/core/colors';


  const useStyles: () => Record<
  'root' 
  |'root1'
  |'paper' 
  |'head'  
  |'avatar',
  string> = makeStyles((theme: Theme) =>
    createStyles({
      root:{
        position:'relative',
      },
      root1:{
        position:'absolute',
        // right: '0px',
        backgroundColor: theme.palette.secondary.main,
        zIndex:100,
        color:'white',
        [theme.breakpoints.down('sm')]:{
          // backgroundColor:yellow[500],
          right: '-20px',
        },
        [theme.breakpoints.up('md')]:{
          // backgroundColor:blue[500],
          right: '-10px',
        },
        [theme.breakpoints.up('lg')]:{
          // backgroundColor: green[500],
          right: '20px',
        } 
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
        [theme.breakpoints.up('md')]:{
          fontSize: '30px',
        }, 
      }, 
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    })
  );
  
  export { useStyles as default };