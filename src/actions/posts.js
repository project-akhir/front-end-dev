import { FETCH_ALL, CREATE, UPDATE, DELETE } from './actionType'
import * as api from '../api/index.js'

//Create Action
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts()

        dispatch ({ type: FETCH_ALL, payload: data})
    }catch(err){
        console.log(err)
    }
}

export const createPost = (post) => async(dispatch) => {
    try{
        const {data} = await api.createPost(post)

        dispatch({type: CREATE, payload: data})
    }catch(err){
        console.log(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        console.log("udah kesini");
        console.log(id);
        console.log(post);
        const {data} = await api.updatePost(id, post)

        console.log("test");
        dispatch({type: UPDATE, payload: data})
    }catch(err){
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id)

        dispatch({type: DELETE, payload: id})
    }catch(err){
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    try{
        const {data} = await api.likePost(id, user?.token)

        dispatch({type: UPDATE, payload: data})
    }catch(err){
        console.log(err);
    }
}