"use client"

import { change_role, getAllUser, isAuthenticated } from '@/app/api/userApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    let[users,setUsers] = useState([])
    let[token,setToken] = useState('')
    let[success,setSuccess] = useState(false)

    useEffect((error)=>{
        getAllUser()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setUsers(data)
                setSuccess(false)
            }
        })
        isAuthenticated()
        .then(data=>{
            if(data.token){
             setToken(data.token)
            }
        })
    },[success])

    const changeRole = (user)=>e =>{
        e.preventDefault()

        let new_role;
        if(user.role===1){
            new_role = 0
        }
        else{
            new_role = 1
        }
        Swal.fire({title:'Warning',
            text: user.role===1?"REMOVE ADMIN":"MAKE ADMIN",
            icon:'warning',
            showCancelButton:true,
            cancelButtonColor:'green'
        })
        .then(result=>{
            if(result.isConfirmed){
                change_role(user._id,new_role,token)
                .then(data=>{
                    if(data.error){
                        Swal.fire('Error',data.error,'Error')
                    }
                    else{
                        Swal.fire('success',data.success,'success')
                    }
                })
            }
        })


    }
  return (
    <div className='mb-6 '>
     <Link className='ml-7 text-2xl text-blue-600 ' href={'/admin/users/new'}>Register User</Link>
    <h1 className='text-2xl underline text-center font-bold mt-5'>Users</h1>
    
    <table className="border-2 border-gray-300 m-auto w-1/2 mt-5">
        <thead className='border-2'>
            <tr className='p-4  font-semibold text-center'>
                <td className="w-1/12   p-2 border-2">S.N</td>
                <td className="w-2/12  border-2">Username</td>
                <td className="w-2/12  border-2">Email</td>
                <td className="w-2/12  border-2">Role</td>
                <td className="w-2/12  border-2">Action</td>
            </tr>
        </thead>
        <tbody>
            {
                users.length>0 &&
                users.map((user,i)=>(
                    <tr className='border-2 p-4   text-center'>
                        <td className="w-1/12   p-2 border-2" >{i+1}</td>
                        <td className="w-1/12   p-2 border-2">{user.username}</td>
                        <td className="w-1/12   p-2 border-2">{user.email}</td>
                        <td className="w-1/12   p-2 border-2">{user.role===1?"Admin":"Customer"}</td>
                        <td className="w-1/12   p-2 border-2">
                           
                            <Link href={''} className='bg-red-600 rounded-lg hover:bg-red-400  p-2 text-white'
                            onClick={changeRole(user)}
                            >{
                                user.role===1?"Remove Admin":"Make Admin"
                            }</Link>
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
     
    </div>
  )
}

export default page