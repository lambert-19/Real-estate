import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';



const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleGoogle = async () =>{
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, provider);
        //console.log(result);
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        });
        const data = await res.json();
        dispatch (signInSuccess(data));
        navigate('/');

          
      } catch (error) {
        console.log(error)
      }
        

    };
  return (
    <button onClick={handleGoogle} type="button" className='p-3 text-center text-white uppercase bg-red-600 rounded-lg hover:opacity:95 '>
       continue with google
      
        </button>
  )
}

export default OAuth
