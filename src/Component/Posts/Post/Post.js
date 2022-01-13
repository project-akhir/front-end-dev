import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import moment from "moment"
import { useDispatch } from "react-redux";
import EditIcon from '@material-ui/icons/Edit'

import useStyles from './styles'
import { deletePost, likePost } from "../../../actions/posts"

const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const Likes = () => {
        if(post?.likes?.length > 0){
            return post?.likes?.find((like) => like === (user?.result?._id))
                ? 
                    (
                        <><FavoriteIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You & ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
                    ) : (
                        <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                    )
        }
        return <><FavoriteBorderOutlinedIcon fontSize="small"/>&nbsp;Like</>
    }


    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                { (user?.result?._id === post?.creator) && (
                <Button style={{color: 'white', borderRadius: '100px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '5px', margin: 0}} onClick={() => {setCurrentId(post._id)}}>
                    <EditIcon style={{ fontSize:"18px", padding: '0px'}}/>
                </Button>
                 ) }
            </div>
            <Typography className={classes.title} variant="body2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" className={classes.message} color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" disabled={!user?.result} onClick={()=>dispatch(likePost(post._id))}>
                    <Likes fontSize="small"/>
                </Button>
                { (user?.result?._id === post?.creator) && (
                <Button size="small"  onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon className={classes.delete} fontSize="small"/>
                    Delete
                </Button>)}
            </CardActions>
        </Card>
    )
}

export default Post