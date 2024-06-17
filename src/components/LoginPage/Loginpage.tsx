import React, { useState } from 'react'
import './Loginpage.css'
import { Link } from 'react-router-dom';
const Loginpage = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent):void =>  {
    event.preventDefault();
    const Preemail = "kaushik@gmail.com";
    const Prepassword = "1234";

    if (email === Preemail && password === Prepassword) {
      window.location.href = '/home';
    }
    else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <div className='login-container'>
        <div className='login-content'>
          <h2>Log-In</h2>
          <form onSubmit={handleSubmit}>
                <div>
                <input type='email' placeholder='Enter your Email'
                 value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                <input type='password' placeholder='Enter your Password'
                 value={password} onChange={(e) => setPassword(e.target.value)} required pattern='.{4,}'/>
                </div>
                <div className='button-submit'>
                 <button type='submit'>Login</button>
                 </div>
                 <p>
        Don't have an account? <Link to="/sign">Sign up here</Link>
      </p>
            </form>


        </div>

      </div>
    </>
  )
}

export default Loginpage