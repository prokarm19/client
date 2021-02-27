import { LOADING_PROCESS, LOGIN, LOGIN_FAIL, LOGOUT, SIGN_UP,REGISTER_FAIL,AUTH_FAIL,LOADING_SUCCESS } from "../actions/actiontypes";

const intialstate ={
  token: localStorage.getItem('token'),
  isAuthenticated:null,
  isLoading:null,
  user:null,    
  error:null
}
function authreducer(state = intialstate, actions){
    switch (actions.type) {
        case SIGN_UP:
            console.log(actions.payload.token)
            localStorage.setItem('token',actions.payload.token)
            return{
                ...state, 
                ...actions.payload,
                isLoading:false,
                isAuthenticated:true
            }

        case LOGIN:
            localStorage.setItem('token',actions.payload.token)
            return{
                ...state, 
                ...actions.payload,
                isLoading:false,
                isAuthenticated:true
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_FAIL:
            localStorage.removeItem('token');
            console.log("fail : all Clear")
            return{
                ...state,
                error: actions.payload.error,
                isAuthenticated:null,
                token:null
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated:null,
                isLoading:null,
                user:null,    
                error:null
            }
        case LOADING_PROCESS:
           return{
               ...state,
               isLoading:true
           }
           case LOADING_SUCCESS:
               return{
                   ...state,
                   isLoading:false
               }
           
        
    
        default:
            return state
    }
    
}
export default authreducer;