import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles: () => Record<
'root'
| 'title'
| 'content'
| 'learnMore'
| 'btn'
| 'cardList'
| 'card'
| 'cardContent'
| 'titleCard'
| 'imgCard'
| 'iconCard'
, string>
 = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 200,
    paddingTop: 100
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 20,
    fontWeight: 400
  },
  learnMore: {
    padding: theme.spacing(4, 0),
  },
   btn: {
    backgroundColor: '#f50357',
    color: '#fff',
    height: 50,
    width: 200,
    '&:hover': {
        border: '1px solid #f50357',
        backgroundColor: '#fff !important',
        color: '#f50357'
    }
   },
   cardList: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
   },
   card: {
       maxWidth: 700,
       border: '1px solid #f50357',
       display: 'flex',
       borderRadius: '30px',
       boxShadow: '5px 8px 20px -8px rgba(82,82,82,1) !important'
   },
   cardContent:{
   },
   titleCard: {
       fontSize: 30,
       fontWeight: 500,
       color: '#f50357'
   },
   imgCard: {
       width: '30%',
       height: 'auto',
       position: 'relative'
   },
   iconCard: {
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       fontSize: 70,
       color: '#f50357'
   },
 }));

 export { useStyles as default };
