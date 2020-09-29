import { auth } from './firebase';
import React, { useState } from 'react';

import './Login.css';
import { Link ,useHistory } from 'react-router-dom';

function Login() {
    const history= useHistory();
    const [email,setEmail]= useState('');
    const [pass,setPass]=useState('');
    const Signin=e=>
    {e.preventDefault();
        auth.signInWithEmailAndPassword(email,pass)
    .then(auth=>
        {
            history.push("/")
        })
    .catch(error=>alert(error.message))
}
    const Signup=e=>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass)
   .then((auth)=>{
if(auth)
 {  history.push('/')}
   }) .catch(error=>alert(error.message))}
    return (
        <div  className="sign">
            <img className="sign_Img" src="" alt=""/>
            <div class="sign_box">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={pass} onChange={e=>setPass(e.target.value)}/>
                    <button type='submit' onClick={Signin} className="sign_button">Sign in</button>
                </form>
    
                <button onClick={Signup}className="sign_upbutton">Create Your Account</button>
     
               
            </div>
              </div>
    )
}

export default Login
