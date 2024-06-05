"use client"
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className=" p-5 w  ">
        <form className="w-full md:w-3/4 lg:w-1/2 #b2bec3p-10 m-auto border-2 p-4 ">
          <h1 className="text-center text-3xl font-bold underline uppercase">
            Login
          </h1>
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg mt-3 mb-3 focus:outline-none"
          />
          <label htmlFor="password" className="text-xl  ">
            Password:
          </label>
          <input
            type="password"
            id="password"
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
          <button className="text-3xl bg-blue-500 w-full h-15 mt-3 hover:bg-blue-600 rounded-lg text-white p-3">
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
