import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { signUp } from '../store/actions/authactions';
import {useHistory} from 'react-router-dom'
// import Input from './Input';

const Signup = (props) => {
    const history = useHistory()
    //  const userAdded = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            phone: "",
            email:'',
            password:""      
        },
        
        validationSchema: Yup.object({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            phone:Yup.string("numbers only").matches(/^[0-9]/,'numbers only').length(10,'10 digits only').required(),
            email: Yup.string().email("enter valid email").required(),
            password: Yup.string().min(8 ,'at least 8 character should be there ').required(),
        }),

        onSubmit: async (values,actions) => {
              await dispatch(signUp(values));
              actions.resetForm();
              history.replace("/profile")
        }
    })

    
    return (
        <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="firstname" placeholder=" First Name " value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                  {formik.touched.firstname && formik.errors.firstname ? (<div className="formerror">{formik.errors.firstname}</div>) : null}

                <input type="text" name="lastname" placeholder=" Last Name " value={formik.values.lastname} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                {formik.touched.lasttname && formik.errors.lastname ? (<div className="formerror">{formik.errors.lastname}</div>) : null}

                <input type="text" name="phone" placeholder=" 10 digit phone number " value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                  {formik.touched.phone && formik.errors.phone ? (<div className="formerror">{formik.errors.phone}</div>) : null}

                <input type="email" name="email" placeholder="Your E-Mail " value={formik.values.email} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                  {formik.touched.email && formik.errors.email ? (<div className="formerror">{formik.errors.email}</div>) : null}

                <input type="password" name="password" placeholder=" ***** " value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                  {formik.touched.password && formik.errors.password ? (<div className="formerror">{formik.errors.password}</div>) : null}

               <button type="submit" className="submitbutton">Submit</button>
                
            </form>
        </div>
    );
}


export default Signup;
