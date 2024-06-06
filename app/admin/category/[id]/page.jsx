"use client"
import { getAllCategories, getCategoryDetails, updateCategory } from '@/app/api/categoryApi'
import { isAuthenticated } from '@/app/api/userApi'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    let[category_name,setCategoryName] = useState("")
    let[token,setToken] = useState("")

    let id = useParams()?.id

    useEffect(()=>{
        isAuthenticated()
        .then(data=>{
            setToken()
        })

        getCategoryDetails(id)
        .then(data=>{
            console.log(data)
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategoryName(data.category_name)
            }
        })
    },[])

    const handleupdate = ()=>{
        updateCategory(id,{category_name},token)
        .then(data=>{
            if(data.error){
                Swal.fire("Error",data.error,'error')
            }
            else{
                Swal.fire("Congrats","Category updated","success")
            }
        })
    }
  return (
   <>
   <div className='p-5 rounded-lg shadow-lg'>
    <h1 className='text-center underline font-3xl mb-8'>Update Category</h1>
    <div className='text-center'>
        <label htmlFor="" className='mr-2'>Category Name :</label>
        <input className='w-1/4' type="text" name='category_name'
        onChange={e=>setCategoryName(e.target.value)}
        value={category_name}
        /><br></br>
        <button className='border-2 p-2 mt-4 bg-blue-600 text-white rounded-lg'
        onClick={handleupdate}
        >Update Category</button>
    </div>

   </div>
   </>
  )
}

export default page