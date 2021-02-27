import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route , Switch} from 'react-router-dom';
import Profile from './components/Profile';
import Updateprofile from './components/Updateprofile';

function App() {
  
  return (
    <div className="">
      
        <Navbar/>
      <section className="bodyContianer">
      <Switch>    
      <Route path="/profile/update" exact>
      <Updateprofile/>
      </Route>    
      <Route path="/profile" exact>
        <Profile/>
      </Route>
      <Route path="/signup" exact>
      <Signup/>
      </Route>
      <Route path="/login" exact>
       <Login/>
      </Route>
      <Route path="/" exact>
      <Login/>
      </Route>
      </Switch>
      </section>
      
    </div>
  );
}

export default App;
