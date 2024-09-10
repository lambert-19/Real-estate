import React, { useState } from 'react'
import { useNavigate ,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import OAuth from '../Components/OAuth';
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
      
setFormData({ ... formData, [e.target.id]: e.target.value });

console.log(formData);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
       
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success == false){
    
    dispatch(signInFailure(data.message));
    return ;
    }
    dispatch(signInSuccess(data));
    setTimeout(() => {
      navigate("/");
    },3000);
    

    } catch (error) {
    dispatch(signInFailure(error.message));
      
    }
   
  };

  return (
    <div className="max-w-lg p-3 mx-auto my-16 bg-slate-500">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      {error && <p className='mb-2 text-4xl font-semibold text-center text-red-600'>{error}</p>}
      <form onSubmit={handleSubmit}> 
    <div className='flex flex-col gap-3 p-3 ml-12 '>
<label >Email </label>
<input type='email' name='email' id='email'  className="p-1 border rounded-lg" onChange={handleChange}/>

<label >Mot de Passe </label>
<input type='password' name='password' id='password'  className="p-1 border rounded-lg" onChange={handleChange}/>
    
<button
          className="p-2 mt-3 text-white uppercase rounded-lg bg-slate-900 hover:opacity-95"
          name="submit"
          id="submit"
        >
        {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
    </div>
    </form>
    <div className="flex items-center gap-2 mt-5 ml-20 text- hover:opacity-85">
        <p>Does not have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-center text-blue-700">Sign up</span>
        </Link>
        
      </div>
    </div>

  )
}

export default SignIn