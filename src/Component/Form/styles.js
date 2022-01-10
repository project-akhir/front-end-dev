import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  half: {
    width: "48.5%",
  },
  double: {
    
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: '15px',
    marginBottom: 10,
    width: "47.5%",
    marginLeft: "11px",
    marginRight: '11px'
  },
  [theme.breakpoints.down('md')] : {
    half :{
      width: '100%',
    }
  },
}));