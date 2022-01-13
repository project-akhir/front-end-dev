import { deepPurple, indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  half: {
    width: "100%",
  },
  double: {
    
  },
  title:{
    textAlign: 'center',
  },
  paper: {
    marginTop: '15%',
    marginLeft: '25%',
    width: '45%',
    padding: theme.spacing(2),
  },
  before:{
    marginTop: '20%',
    marginLeft: '26%'
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
    width: "45%",
    marginLeft: "11px",
    marginRight: '11px'
  },
  submit: {
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    '&:hover': {
    backgroundColor: indigo[700],
    }
  },
  [theme.breakpoints.down('md')] : {
    buttonSubmit: {
      marginTop: '15px',
      marginBottom: 10,
      width: "100%",
      marginLeft: "11px",
      marginRight: '11px'
    },
    half :{
      width: '100%',
    },
    paper: {
      marginTop: '30%',
      marginLeft: '25%',
      width: '45%',
      padding: theme.spacing(2),
    }
  },
  [theme.breakpoints.down('sm')] : {
    before:{
      marginTop: '35%',
      marginLeft: '26%'
    },
    paper: {
      marginTop: '40%',
      marginLeft: '25%',
      width: '50%',
      padding: theme.spacing(2),
    }
  },
  [theme.breakpoints.down('xs')] : {
    before:{
      marginTop: '60%',
      marginLeft: '24%'
    },
    paper: {
      marginTop: '60%',
      marginLeft: '20%',
      width: '55%',
      padding: theme.spacing(2),
    }
  },
}));