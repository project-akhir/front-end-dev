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
    marginTop: '10%',
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
  },
  [theme.breakpoints.down('sm')] : {
    before:{
      marginTop: '35%',
      marginLeft: '26%'
    }
  },
  [theme.breakpoints.down('xs')] : {
    before:{
      marginTop: '60%',
      marginLeft: '24%'
    }
  },
}));