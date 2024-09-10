// eslint-disable-next-line no-unused-vars
import { set } from 'mongoose';
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import OAuth from '../Components/OAuth';

/**
 * SignUp component for handling user sign up form.
 * @returns {JSX.Element} The SignUp component.
 */
const SignUp = () => {

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // State hook to store form data
  const [formData, setFormData] = useState({});

  /**
   * Handles form input change.
   * Updates the formData state with the new input value.
   * @param {Object} e - The input event object.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  /**
   * Handles form submission.
   * Sends a POST request to the signup API endpoint with the form data.
   * @param {Object} e - The form submit event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
       // eslint-disable-next-line no-unused-vars
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success == false){
    setLoading(false);
    setError(data.message);
    return ;
    }
    setLoading(false);
    setError(null);
    setTimeout(() => {
      navigate("/sign-in");
    },3000);
   

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
   
  };

  return (
    <div className="max-w-lg p-3 mx-auto my-16 bg-slate-500">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      {error && <p className='mb-2 text-4xl font-semibold text-center text-red-600'>{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* User Name */}
        <label>UserName</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="p-1 border rounded-lg"
          onChange={handleChange}
        />
        
        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="p-1 border rounded-lg"
          onChange={handleChange}
        />
        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="p-1 border rounded-lg"
          onChange={handleChange}
        />
        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="confirm-password"
          id="password1"
          name="password1"
          className="p-1 border rounded-lg"
          onChange={handleChange}
        />
        <button
          className="p-2 mt-3 text-white uppercase rounded-lg bg-slate-900 hover:opacity-95"
          name="submit"
          id="submit"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-3 mt-5 ml-20 text-center">
        <p>Already have an account</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
        
      </div>
    </div>
  );
};


export default SignUp;