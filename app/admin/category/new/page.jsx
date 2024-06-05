"use client"
import { addCategory } from '@/app/api/categoryApi'
import { isAuthenticated } from '@/app/api/userApi'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    let[categoryName,setCategoryName] = useState("")
    let[token,setToken] = useState("")

    useEffect(()=>{
        isAuthenticated()
        .then(data=>{
            setToken()
        })
    },[])

    const handleadd = ()=>{
        addCategory({categoryName},token)
        .then(data=>{
            if(data.error){
                Swal.fire("Error",data.error,'error')
            }
            else{
                Swal.fire("Congrats","New category added","success")
            }
        })
    }
  return (
   <>
   <div className='p-5 rounded-lg shadow-lg'>
    <h1 className='text-center underline font-3xl mb-8'>Add New Category</h1>
    <div className='text-center'>
        <label htmlFor="" className='mr-2'>Category Name :</label>
        <input className='w-1/4' type="text" name='category_name'
        onChange={e=>setCategoryName(e.target.value)}
        /><br></br>
        <button className='border-2 p-2 mt-4 bg-blue-600 text-white rounded-lg'
        onClick={handleadd}
        >Add Category</button>
    </div>

   </div>
   </>
  )
}

export default page