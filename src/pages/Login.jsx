import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Login = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");

    } catch (error) {
      setError(true)
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>JA chat app</span>
        <span className='title'>Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  )
}
