// eslint-disable-next-line no-unused-vars
import { set } from 'mongoose';
import React, { useState } from "react";

/**
 * SignUp component for handling user sign up form.
 * @returns {JSX.Element} The SignUp component.
 */
const SignUp = () => {
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
    // eslint-disable-next-line no-unused-vars
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="max-w-lg p-3 mx-auto my-16 bg-slate-500">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* First Name */}
        <label>First Name</label>
        <input
          type="text"
          placeholder="firstname"
          id="firstname"
          name="firstname"
          className="p-1 border rounded-lg"
          onChange={handleChange}
        />
        {/* Last Name */}
        <label>Last Name</label>
        <input
          type="text"
          placeholder="lastname"
          id="lastname"
          name="lastname"
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
          className="p-2 mt-3 text-white uppercase bg-green-700 rounded-lg hover:opacity-100"
          type="submit"
          name="submit"
          id="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-5 text-center">
        <p>Already have an account</p>
        <a href="">
          <span className="text-blue-700">Sign In</span>
        </a>
      </div>
    </div>
  );
};


export default SignUp;