"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authenticate, isAuthenticated, login } from "../api/userApi";
import Swal from "sweetalert2";

const Login = () => {
  let[user,setUser] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setUser({...user,[e.target.name]: e.target.value})

  }
  let{email,password} = user
  let router = useRouter();

  const handleSubmit = (e)=>{
    e.preventDefault()
    login(user)
    .then(data=>{
      console.log(data)
      if( data && data.error){
        Swal.fire({
          title:'Error',
          text: data.error,
          icon:'error',
          confirmButtonColor :"Blue",
          timer:3000,
          timerProgressBar: true,
          position:'top-end',
          showCancelButton : true,
          showConfirmButton: false
        })
      }
      else{
        authenticate(data)
        isAuthenticated()
        .then(data=>{
          if(data.user.role==1){
            router.push('/admin')
          }
          else{
            router.push('/')
          }
        })
      }
    })
  }
  return (
    <>
      <div className=" p-5">
        <form className="w-full md:w-3/4 lg:w-[600px] #b2bec3p-10 m-auto border-2 p-4 rounded-lg   bg-gray-50 ">
          <h1 className="text-center text-3xl font-bold underline uppercase">
            Login
          </h1>
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          />
          <label htmlFor="password" className="text-xl  ">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          />
          <div className="flex justify-between mt-2">
            <div className="flex gap-3   text-md  text-md items-center">
              <input type="checkbox" />
              <p>Remeber me</p>
            </div>

            <Link href = '' className="text-blue-700 hover:text-blue-500">
              Forget Password
            </Link>
          </div>
          <button  onClick={handleSubmit}
          className="text-3xl bg-blue-500 w-full h-15 mt-3 hover:bg-blue-600 rounded-lg text-white p-3">
            Login
          </button>

          <p className="text- md mt-5 ">
            Do not have account?.Please{" "}
            <Link
              href="/register"
              className="text-blue-700  hover:text-blue-500"
            >
              Register!!
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
