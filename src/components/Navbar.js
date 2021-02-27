import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {Link } from 'react-router-dom'
import { LOGOUT } from '../store/actions/actiontypes';

function Navbar (props){
  let link = <li><Link to="/Login">Login</Link></li>  
  
   const state = useSelector(state => state.auth);
   const dispatch = useDispatch()
   
   if(state.isAuthenticated){
       link = <li className="logoutBtn" onClick={()=>dispatch({type:LOGOUT})}><span>{`Welcome ${state.user.name}`}</span> Logout</li>
   }else{
    link = <li><Link to="/Login">Login</Link></li>
   }
  return( <header className="mainHeader">
    <nav>
      <ul>        
        {state.isAuthenticated?<li> <Link to="/profile">Profile</Link></li>: null }
        {state.isAuthenticated?null: <li><Link to="/signup">SignUp</Link></li>}
        {link}  
      </ul>
    </nav>
  </header>)
}

export default Navbar;