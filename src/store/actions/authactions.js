import axios from "axios";
import {
    LOADING_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGOUT,
    SIGN_UP
} from "./actiontypes";

export const signUp = (formvalues) => {
    console.log(formvalues);
    const {
        firstname,
        lastname,
        phone,
        email,
        password
    } = formvalues;
    return  dispatch => {

        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body =JSON.stringify({firstname,
            lastname,
            phone,
            email,
            password})
           axios.post('/api/signup',body,config )       
         .then(res => {
            console.log(res.data);
            dispatch({
                type: SIGN_UP,
                payload: res.data
            })
        }).catch(err=>console.log(err.response.data))

        

    }
}

export const login = credential => {
    console.log();
    const {
        email,
        password
    } = credential;
    return  dispatch => {

        const body = JSON.stringify({email,password});
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('/api/login',body,config).then((res) => {
            console.log(res.data);
            dispatch({type:LOADING_SUCCESS})
            dispatch({type:LOGIN,payload:res.data});


        }).catch((err) => {
            console.log(err.response);
            dispatch({type:LOGIN_FAIL,payload:err.response})
        })
        
    }
}

export const logout = () => {
    return{type:LOGOUT};
}

