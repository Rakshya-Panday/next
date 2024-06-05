"use client"
import React, { useState } from "react";
import Link from "next/link";
import { register } from "../api/userApi";


const Signup = () => {
  let [user,setUser] =useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = e=>{
    setUser({...user,[e.target.name]:[e.target.value]})
  }

  let {username,email,password} = user
const handleSubmit= (e)=>{
  e.preventDefault()
  register(user)
  .then(data=>{
    if(data.error){
      alert(data.error)
    }
    else{
        setUser({username:"",email:"",password:""})
      alert("User Register successfully")
    }
  })
}



  return (
    <div className=" p-5 w  ">
      <form className="w-full md:w-3/4 lg:w-1/2 #b2bec3p-10 m-auto border-2 p-4 ">
        <h1 className="text-center text-3xl font-bold mb-5 uppercase">
          Create an Account
        </h1>

        {/* <div >
       <label htmlFor="firstName">FirstName</label>
       <input type="text" id='firstName' className='w=full border-2 border-gray-300 ' />
       <label htmlFor="lastName">LastName</label>
       <input type="text"  id="lastName" className='w-1/2 border-2 border-gray-300 ' />
    </div> */}
        <label htmlFor="email" className="text-xl">
           Username:
        </label>
        <input
          type="text"
          value={username}
          id="username"
          name="username"
          className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          onChange={handleChange}
        />
        <label htmlFor="email" className="text-xl">
           Email:
        </label>
        <input
          type="text"
          value={email}
          id="email"
          name="email"
          className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-xl  ">
          Password:
        </label>
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-xl  ">
          Conform Password:
        </label>
        <input
          type="password"
          id="password"
          className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
        />
        <div className="flex justify-between mt-2">
          <div className="flex gap-3   text-md  text-md items-center">
            <input type="checkbox" />
            <p>I accept all the <span className="font-semibold">Terms and Conditions</span></p>
          </div>

          <Link  href = '/'className="text-blue-700 hover:text-blue-500">
            Forget Password
          </Link>
        </div>
        <button className="text-2xl bg-blue-500 w-full h-15 mt-3 hover:bg-blue-600 rounded-lg text-white p-3"
        onClick={handleSubmit}
        >
          Create an account
        </button>

        <p className="text- md mt-5 item-center">
        Already have an account? Please{" "}
          <Link href="/login" className="text-blue-700 hover:text-blue-500">
            Login!!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
