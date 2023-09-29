import React, { useState } from 'react'
import './Signup_Signin.css'
//we will import the auth and a function to create and authenticate the user
import {
          getAuth,
          createUserWithEmailAndPassword, 
          GoogleAuthProvider,
          signInWithPopup,
          GithubAuthProvider,
          FacebookAuthProvider
        } from 'firebase/auth'
import {app} from '../Firebase'

//import the required methods and functions to register with github
// import {GithubAuthProvider} from 'firebase/auth'

const auth = getAuth(app);
//google provider instance
const googleProvider = new GoogleAuthProvider();
//github provider instance
const githubProvider = new GithubAuthProvider();
//facebook provider instance
const facebookProvider = new FacebookAuthProvider();


const Signup = () => {


    //creating the states for the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //lets create a function to register a new user
    const createUser = () => {
         createUserWithEmailAndPassword(
            auth, 
            email , 
            password
            ).then((val) => alert("Registered Successfully"));
    };

    //now we will create a function to signup with google
    const signupWithGoogle = () => {
      signInWithPopup(auth, googleProvider);
    }

    //function to register with the github account using popup window
    const signupWithGithub = () => {
      signInWithPopup(auth, githubProvider);
    }

    //function to register a user with the facebook using popup  window
    const signupWithFacebook = () => {
      signInWithPopup(auth, facebookProvider).then((result) => console.log(result)).catch((err)=>{console.log("this is error ", err.message)});
    }

  return (
    <div className='main'>
      
        <h1 className='signup-heading'>SignUp Here</h1>
       <div className='content'>
       <input type='email' onChange={(e) => setEmail(e.target.value)} required placeholder='enter email'/>
       
       <input type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='password at least 6 characters'/>
       
       <button className='button' onClick={createUser}>SingUp</button>
      
       <button className='button' onClick={signupWithGoogle}>SignUp with Google</button>

       <button className='button' onClick={signupWithGithub}>SignUp with Github</button>

       <button className='button' onClick={signupWithFacebook}>SignUp with Facebook</button>
       </div>
       
    </div>
  )
}

export default Signup;