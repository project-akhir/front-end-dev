import { makeStyles } from '@material-ui/core/styles';
import { blue, deepPurple} from '@material-ui/core/colors';

function random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

export default makeStyles((theme) => ({
  appBar: {
     borderRadius: 0,
     margin: '0px 0px 6px 0px',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: '10px 30px',
     //backgroundColor: '#DFD3C3'
  },
  bg: {
    backgroundColor: deepPurple
  },
  heading: {
    color: '#343a40',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '340px',
  },
  toolbar1: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '165px',
  },
  logout : {
    margin: '15px 15px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[900]),
    backgroundColor: random_color,
  },
  [theme.breakpoints.down('sm')] : {
    heading : {
      color: '#343a40',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontSize : 24
  },
    userName: {
      display: 'none'
  },
   toolbar1: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '170px',
  }
  },
  [theme.breakpoints.down('xs')] : {
    heading : {
      color: '#343a40',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontSize : 20
  },
    userName: {
      display: 'none'
  },
   toolbar1: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '170px',
  }
  }
}));