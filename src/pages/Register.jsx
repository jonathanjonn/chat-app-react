import React, { useState } from 'react'
import { LuImagePlus } from "react-icons/lu";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {

      const response = createUserWithEmailAndPassword(auth, email, password)

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile((await response).user, {
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", (await response).user.uid), {
              uid: (await response).user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", (await response).user.uid), {});
            navigate("/");
          } catch (error) {
            setError(true)
            setLoading(false)
          }
        })
      });




    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>JA chat app</span>
        <span className='title'>Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: 'none' }} type="file" id='file' />
          <label htmlFor="file">
            <LuImagePlus />
            <span>Add a display picture</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading the image please wait..."}
          {error && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  )
}
