import { deepPurple, indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  modal: {
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    '&:hover': {
    backgroundColor: indigo[700],
    }
  },
  bg: {
    backgroundColor : '#f8f9fa',
    paddingTop: '30px'
  }
}));