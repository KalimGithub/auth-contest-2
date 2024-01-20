import React, { useState } from 'react'
import rectangle1 from '../Images/Rectangle 1.svg'
import rectangle2 from '../Images/Rectangle 2.svg'
import rectangle3 from '../Images/Rectangle 3.svg'
const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    try {
      //   // code to test for errors
      fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: email,
            password: password
          })
        })
          .then(res => res.json())
          .then((data) => console.log(data));
      } catch (error) {
        // code to handle errors
        console.log(error);
      }
  }


  
  
  
  return (
    <div style={{width:"45vw", margin:"5% auto"}} className='container'>
      <div className='signup'>
      <p id='welcome-text'>Welcome back! 👋</p>
      <h2 id='heading'>Sign in to your account</h2>
      <br/>
      <label id='email'>Your Email:</label>
      <input  id='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>

      <label id='password'>Your Password:</label>
      <input  id='password' type='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button id='continue-btn' onClick={handleSubmit}>CONTINUE</button>
      <br/>
      <a id='forgot-password' href='#'>Forget your password?</a>
      </div>
      <p id='no-account-text'>Don’t have an account? <a href='#'>Sign up here</a></p>
    </div> 
  )
}

export default SignUp