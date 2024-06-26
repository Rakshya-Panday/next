"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated } from "../api/userApi";


const Navbar = () => {
  let [user, setUser] = useState({})
  useEffect(() => {
    isAuthenticated()
      .then(data => {
        setUser(data.user)
      })
  }, [user])

  return (
    <>
      
      <nav className="bg-blue-800">
        <div className="container flex  min-h-[75px] mx-auto">
       {
        user.role ==1 ?<div className="px-8 py-5 bg-blue-600 flex items-center cursor-pointer relative group">
            
        <span className="text-white text-xl capitalize ml-2">
        <i class="bi bi-list text-xl mr-2"></i>
          All Categories
        </span>
        <div className="absolute bg-white w-full top-full left-0 shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:block">
          <Link href ='/fashion' className="flex items-center px-6 py-3 transition">Fashion</Link>
          <Link href='/health' className="flex items-center px-6 py-3 transition">Health</Link>
          <Link href = '/stationary' className="flex items-center px-6 py-3 transition">Stationary</Link>
          <Link href='/'className="flex items-center px-6 py-3 transition">Beauty & Health</Link>
          <Link href = '/sports'className="flex items-center px-6 py-3 transition">Sports & Outdoor</Link>
          <Link  href = '/baby'className="flex items-center px-6 py-3 transition">Babies & Toys</Link>
          <Link href ='/electric' className="flex items-center px-6 py-3 transition">Electronics Devices</Link>

        </div>
      </div>
      :""
         
       }
        





          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex gap-5 capitalize pl-12 items-center text-white text-xl">
              <Link href = '/'>Home</Link>
              <Link href = '/products'>Products</Link>
              <Link href="/about">About</Link>
            
              <Link href = '/contact'>Contact Us</Link>
            </div>
            <div className="flex gap-3 capitalize pl-12 items-center text-white text-xl">
              <Link href ='/login'>Login/</Link>
              <Link href = '/signup'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
