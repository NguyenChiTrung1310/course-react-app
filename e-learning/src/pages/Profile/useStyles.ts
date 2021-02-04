import {
    makeStyles,  
    Theme,
    createStyles, 
  } from '@material-ui/core/styles';  


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
        backgroundColor: theme.palette.secondary.main,
        zIndex:100,
        color:'white',
        [theme.breakpoints.down('sm')]:{ 
          right: '-20px',
        },
        [theme.breakpoints.up('md')]:{ 
          right: '-10px',
        },
        [theme.breakpoints.up('lg')]:{ 
          right: '20px',
        } 
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'left', 
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