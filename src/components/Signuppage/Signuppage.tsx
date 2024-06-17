import React, { useState } from 'react'
import './Signuppage.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Signuppage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // if (password !== confirmPassword) {a
    //   alert('Passwords do not match');
    //   return;
    // }

    // alert('Signup successful! You can now log in.');
    // window.location.href = '/login';
  }

  return (
    <>
    <div className='signup-container'>
        <div className='signup-content'>
          <h2>Sign-Up</h2>
          <form onSubmit={handleSubmit}>
                <div>
                {/* <label>Email:</label> */}
                <input type='email' placeholder='Enter your Email'
                 value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                {/* <label>Password:</label> */}
                <input type='password' placeholder='Enter your Password'
                 value={password} onChange={(e) => setPassword(e.target.value)} required pattern='.{4,}'/>
                </div>
                <div>
                <input type='password' placeholder='Enter your Confirm Password'
                 value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required pattern='.{4,}'/>
                </div>
                <div className='button-submit'>
                 <button type='submit'>Signup</button>
                 </div>
                 <p>
        Back to Log-In <Link to="/">Log-In</Link>
      </p>

            </form>


        </div>

      </div>
    </>
  )
}

export default Signuppage