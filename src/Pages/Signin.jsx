import React, { useState } from 'react'
import './Signup_Signin.css'

//now we will import some functions and methods for the signin 
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

//we are also going to require my app here
import {app} from '../Firebase'

//now we create the instance for the Auth and we will pass the app in it
const auth = getAuth(app);

const Signin = () => {

    //creating states for the email and password
    const [email, setEmail] = useState('');
    const [passsword, setPassword] = useState('');

    //here we will create the function to signin the user
    const signinUser = () => {
        signInWithEmailAndPassword(
            auth, 
            email, 
            passsword
            ).then((val) => alert("success")).catch((err) => alert(err.message));
    };

  return (
    <div className='main'>
        <h1>SignIn Here</h1>
        <div className='content'>
        <input type='emai' onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='enter email'/>

        <input type='password' onChange={(e) => setPassword(e.target.value)} value={passsword} required placeholder='passsword at least 6 characters'/>
        <button className='button' onClick={signinUser}>Signin</button>
        </div>
    </div>
  )
}

export default Signin;