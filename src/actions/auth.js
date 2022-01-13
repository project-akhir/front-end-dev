import { AUTH, FETCH_USER } from './actionType'
import * as api from '../api/index.js'

export const getUser = () => async (dispatch) => {
    try{
        const { data } = await api.fetchUser()

        dispatch ({ type: FETCH_USER, payload: data})
    }catch(err){
        console.log(err)
    }
}

export const signin = (formData, navigate) => async (dispatch) => {
    try{
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data })

        navigate('/')
    }catch(err){
        console.log(err);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try{
        console.log("masuk");
        const { data } = await api.signUp(formData)
        
        dispatch({ type: AUTH, data })

        console.log("masuk");

        navigate('/')
    }catch(err){
        console.log(err);
    }
}