import { SHOW_PROFILE, UPDATE_PROFILE, UPDATE_FAIL } from "../actions/actiontypes";

const initialprofile = {
    firstname:" First name",
    lastname:"last name ",
    age:18,
    phone:100,
    email:"abc.example.com",
    address:" user full address ",
    imageurl:"user profile image path ",
    isLoading: true,
    error:null
}

function profilereducer (state = initialprofile, actions ){
    switch (actions.type) {
        case SHOW_PROFILE:
             console.log('reducer');
             console.log(actions.payload)
            return{
                ...state,
                ...actions.payload
            }
        case UPDATE_PROFILE:
            return state;
        case UPDATE_FAIL:{
            return {
                ...state,
                error:actions.payload
            }
        }
        default:
            return state
    }
}

export default profilereducer;