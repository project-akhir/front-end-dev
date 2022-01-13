import React, { useState, useEffect } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles'
import { createPost, updatePost } from "../../actions/posts";
 
const Form = ({currentId, setCurrentId, setOpen}) => {
    const [postData, setPostData] = useState({
        title:'', message: '', tags:'', selectedFile: ''
    })
    const post = useSelector((state) =>  currentId ? state.posts.find((p) => p._id === currentId) : null)
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    // console.log(user);
    useEffect(()=>{
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(currentId === null){
            console.log("sudah masuk sini, ini create");
            console.log(postData);
            console.log(user?.result?.name);
            dispatch(createPost({ ...postData, name: user?.result?.name }))
        }else{
            console.log(currentId);
            console.log("sudah masuk siniii, ini update");
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
        }
        setOpen(false)
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({title:'', message: '', tags:'', selectedFile: ''})
    }

    if(!user?.result?.name){
        return(
            <Paper className={`${classes.paper} ${classes.before}`}>
                <Typography variant="h6" align="center">
                    Please sign in to create a request or help other people
                </Typography>
            </Paper>
        )
    }

    return(
        <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>{currentId ? 'Editing' : 'Help'}</Typography>
                <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                    <TextField className={classes.half} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                    <TextField className={classes.half} name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
                    <TextField className={classes.double} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                    <div className={classes.fileInput}><FileBase type="file" mutiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/> </div>
                    <Button className={`${classes.buttonSubmit} `} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" className={`${classes.buttonSubmit}`} color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
        </Paper>
    )
}

export default Form