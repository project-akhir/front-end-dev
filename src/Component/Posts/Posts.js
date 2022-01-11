import React from "react";
import { Grid, CircularProgress, Typography } from '@material-ui/core'
import { useSelector } from "react-redux"

import Post from "./Post/Post";
import useStyles from './styles'


const Posts = ({setCurrentId}) => {
    
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    
    console.log(posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
                <Grid xs={12} sm={12}>
                <Typography className={classes.title} variant='h5'>POSTS</Typography>
                </Grid>
                {posts.map((post)=> (
                    <Grid key={post._id} item xs={12} sm={3}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts