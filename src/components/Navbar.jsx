import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const { currUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>JA Chat</span>
      <div className='user'>
        <img src={currUser.photoURL} alt="" />
        <span>{currUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}
