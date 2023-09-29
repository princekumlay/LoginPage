
import {app} from './Firebase'
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import './App.css';

//we will import Signup and Signin  component here 
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import { useEffect, useState } from 'react';

const auth = getAuth(app);


function App() {
 
  //creating state for the user
  const [user, setUser] = useState(null);

  //we use useEffect to check weather the user is signedin or signed out
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
      }else{
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);


  if(user == null){
    return (
      <div className='App'>
        <h4>New User</h4>
       <Signup/>
       <br/>
       <h4>Already a User</h4>
       <Signin/>
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>Hello {user.email}</h1>
      <h6>Welcome to our digital oasis! 🌐 Explore, discover, and embark on a unique journey with us.<br/> We're delighted to have you here.</h6>
      <h5>You have LoggedIn Successfullly.</h5>
      <button className='button' onClick= {() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;