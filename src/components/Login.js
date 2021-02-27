import React,{useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { login } from '../store/actions/authactions';

const Login = (props) => {
    const history = useHistory();
    const loggedstate = useSelector(state => state.auth);
    useEffect(() => {
        if(loggedstate.isAuthenticated){
            history.replace('/profile');
        }
        
    }, [loggedstate.isAuthenticated,history])

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email:'',
            password:""      
        },        
        validationSchema: Yup.object({
            email: Yup.string().email("enter valid email").required(),
            password: Yup.string().required()
        }),

        onSubmit: async (values,actions) => {
              try {
                await dispatch(login(values))
                if(loggedstate.isAuthenticated){
                actions.resetForm();
                } 
              } catch (error) {
                  console.log(error)
              } 
              
        }
    })


    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <div>
                <input type="email" name="email" placeholder="Your E-Mail " value={formik.values.email} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                  {formik.touched.email && formik.errors.email ? (<div className="formerror">{formik.errors.email}</div>) : null}
                </div>
                

                <div>
                    <input type="password" name="password" placeholder=" ***** " value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                  {formik.touched.password && formik.errors.password ? (<div className="formerror">{formik.errors.password}</div>) : null}
                </div>

               <button type="submit" className="submitbutton">Submit</button>
                
            </form>
            <div className="formfootertext"><span>Don't have an account? </span><Link to="/signup">SignUp</Link></div>
        </div>
    );
}

export default Login;
