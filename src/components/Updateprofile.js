import React from 'react'
import {Field,Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import { updateProfile } from '../store/actions/profileactions';
import {Redirect} from 'react-router-dom'

function Updateprofile(props) {
    
     const userProfile = useSelector(state => state.profile);
     const {token,isAuthenticated} = useSelector(state => state.auth);
     console.log(isAuthenticated);
    const dispatch = useDispatch();
     let redirect = <Redirect to="/login"/>
     if(isAuthenticated){
       redirect = null
     }
    return (
       
        <div className="formContainer">
           {redirect}
            <Formik             
            initialValues = {userProfile}
            validationSchema={Yup.object({
              firstname: Yup.string(),
              lastname: Yup.string(),
              phone:Yup.string("numbers only").matches(/^[0-9]/,'numbers only').length(10,'10 digits only').required(),
              address:Yup.string(),
              imageurl:Yup.mixed()}) }
            onSubmit={(values,actions)=>{
                 dispatch(updateProfile(values,token))
            }}  >

          {({values,handleSubmit,setFieldValue,handleChange,handleBlur,errors,touched})=>{
                 return(
                  <form onSubmit={handleSubmit}>
                  <input type="text" name="firstname" placeholder=" First Name " value={values.firstname} onChange={handleChange} onBlur={handleBlur}  />
                    {touched.firstname && errors.firstname ? (<div className="formerror">{errors.firstname}</div>) : null}
  
                  <input type="text" name="lastname" placeholder=" Last Name " value={values.lastname} onChange={handleChange}  onBlur={handleBlur} />
                  {touched.lasttname && errors.lastname ? (<div className="formerror">{errors.lastname}</div>) : null}
  
                  <input type="text" name="phone" placeholder=" 10 digit phone number " value={values.phone} onChange={handleChange} onBlur={handleBlur}  />
                    {touched.phone && errors.phone ? (<div className="formerror">{errors.phone}</div>) : null}
  
                  <input type="text" name="age" placeholder="Age " value={values.age} onChange={handleChange} onBlur={handleBlur}  />
                    {touched.age && errors.age ? (<div className="formerror">{errors.age}</div>) : null}
                  <Field as="textarea" name="address" value = {values.address}/>
                    {/* <input type="file" name="imageurl" value={values.imageurl} onChange={(event) => {  setFieldValue("imageurl",event.currentTarget.file)}} onBlur={handleBlur}  />
                    <img src={values.imageurl} width="50" alt="selected image"/> */}
  
                 <button type="submit" className="submitbutton">Submit</button>
                  
              </form>
                 )
          }}
            
            </Formik>
            
        </div>
    );
}

export default Updateprofile
