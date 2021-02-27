import axios from 'axios';
import {AUTH_FAIL, UPDATE_FAIL, SHOW_PROFILE, UPDATE_PROFILE } from "../actions/actiontypes";





export const loadProfile = (authtoken) => {
    return dispatch =>{
           console.log(authtoken)
        const configHeader = {
           headers:{'Content-type': 'application/json',
           'x-auth-token': authtoken
        } 
        }
        axios.get('/api/profile',configHeader).then((res) => {
            console.log(res.data);
            dispatch({type:SHOW_PROFILE,payload:res.data})
        }).catch((error) => {
            // dispatch({type:AUTH_FAIL,payload:error.response})
            console.log(error.response.data)
            
                dispatch({type:AUTH_FAIL});

            
        })
    }
}
export const updateProfile = (updatedData,authtoken) => {
    return dispatch => {
        const{firstname,
        lastname,
        age,
        phone,
        email,
        address,} = updatedData
        //setting headers
        const configHeader = {
            headers:{'Content-type': 'application/json',
            'x-auth-token': authtoken
         } 
         }
         const body  = JSON.stringify({firstname,
            lastname,
            age,
            phone,
            email,
            address,})
        // perform backend updation
        axios.patch('/api/update/profile',body, configHeader).then((res) => {
            console.log(res.data)
            dispatch({type:UPDATE_PROFILE,payload:res.data})
        }).catch((error) => {
            dispatch({type:UPDATE_FAIL,payload:error.response});
            console.log(error.response)
        })
    }
}