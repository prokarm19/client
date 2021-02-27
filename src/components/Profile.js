import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { loadProfile } from '../store/actions/profileactions';
// import prsn  from '../../public/person.jpg'


const Profile = (props) => {
    const user = useSelector(state => state.auth);
    const profileData = useSelector(state=> state.profile);
    const dispatch = useDispatch();
    // const [imageurl, setImageurl] = useState();

    useEffect(() => {
        if(user.token && user.isAuthenticated ){
            dispatch(loadProfile(user.token))
        }else{
            console.log(props)
            
        }
       
        
    }, []);

    const imageUploadHandler = (e,imagedetails)=> {
            
    }
     let redirect = <Redirect to="/login"/>
     if(user.isAuthenticated){
         redirect = null
     }
     console.log(profileData);
     let profiledata = new Array(profileData).map((data,index)=>{
         
         return(
             <ul className="profiledetail">
                 <li key="asd"><span>First Name: </span><span>{data.firstname}</span></li>
                 <li key="pof"><span>Last Name : </span><span>{data.lastname}</span></li>
                 <li key="ooi"><span>Age : </span><span>{data.age}</span></li>
                 <li key="nbh"><span>Email : </span><span>{data.email}</span></li>
                 <li key="asdf"><span>Phone : </span><span>{data.phone}</span></li>
                 <li key="lla"><span>Address: </span><span>{data.address}</span></li>
             </ul>
         )
     })
    return (
        <div className="profileContainer">
            {redirect}
            <h2>USER Profile</h2>
            <div className="userprofile">
              <img src="../../public/person.jpg" alt=" user profile pic" />
              <form onSubmit={imageUploadHandler}>
                  <input type="file" name="file" />
              </form>
            </div>    
            <div className="userinformationcontainer">
                  {profiledata}
            </div>        
           <div className="btn"><Link to="/profile/update">Edit Profile</Link></div>
        </div>
    );
}

export default Profile;
