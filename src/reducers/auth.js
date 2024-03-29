import { AUTH, LOGOUT, FETCH_USER } from "../actions/actionType"

const auth = ( state = { authData: null }, action ) => {
    switch(action.type){
        case FETCH_USER : 
            return action.payload
        case AUTH : 
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))

            return { ...state, authData: action?.data, loading: false, errors: null}
        case LOGOUT : 
            localStorage.clear()

            return { ...state, authData: null, loading: false, errors: null } 
        default :
            return state
    }
}

export default auth