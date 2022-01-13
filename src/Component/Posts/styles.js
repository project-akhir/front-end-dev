import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    // display: 'flex',
    // border: 'solid',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    display: 'flex',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
    marginTop:'10px'
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center'
    
  }
}));