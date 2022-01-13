import React, {useState, useEffect}from "react"
import { Container, Grow, Grid, Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts"
import Modal from '@mui/material/Modal'

import useStyles from './styles'
import Posts from "../Posts/Posts"
import Form from "../Form/Form"

const Home = () => {
    const classes = useStyles()
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getPosts())
        if(currentId){
          setOpen(true)
        }
    }, [currentId, dispatch])
        
    return(
  <div className={classes.bg} > 
  <Grow in>
          <Container>
            <Grid container  justifyContent="space-between" alignItems='flex-start' spacing={1}>
              <Grid  item xs={12} sm={12}>
              <Button onClick={handleOpen} color='primary' variant='contained'>+ Add Post</Button>
                <Modal 
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Form className={classes.form} setOpen={setOpen} currentId={currentId} setCurrentId={setCurrentId}/>
                </Modal>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
        </Container>
    </Grow>
  </div>
    )
}

export default Home