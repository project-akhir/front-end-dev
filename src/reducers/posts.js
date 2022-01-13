import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../actions/actionType"

export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL : 
            return action.payload
        case CREATE : 
            console.log(action.payload, "===================ini reducer create post");
        return [...posts, action.payload]
        case UPDATE :            
            console.log(action.payload, "===================ini reducer update post");
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETE : 
            return posts.filter((post) => post._id !== action.payload)
        default : 
            return posts
    }
}