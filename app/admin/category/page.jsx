"use client"
import { deleteCategory, getAllCategories } from '@/app/api/categoryApi'
import { isAuthenticated } from '@/app/api/userApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    let[categories,setCategories] = useState([])
    let[token,setToken] = useState('')
    let[success,setSuccess] = useState(false)

    useEffect((error)=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
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

    const handleDelete = (id)=>e =>{
        e.preventDefault()
        Swal.fire({title:'Warning',
            text:'Are u sure u want to delete this category',
            icon:'question',
            showCancelButton:true,
            cancelButtonColor:'green'
        })
        .then(result=>{
            if(result.isConfirmed){
                deleteCategory(id,token)
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
 <Link className='ml-7 text-2xl text-blue-600 ' href={'/admin/category/new'}>Add new Category</Link>
    <h1 className='text-2xl underline text-center font-bold mt-5'>Categories</h1>
    
    <table className="border-2 border-gray-300 m-auto w-1/2 mt-5">
        <thead className='border-2'>
            <tr className='p-4  font-semibold text-center'>
                <td className="w-1/12   p-2 border-2">S.N</td>
                <td className="w-2/12  border-2">Category Name</td>
                <td className="w-1/12  border-2">Action</td>
            </tr>
        </thead>
        <tbody>
            {
                categories.length>0 &&
                categories.map((category,i)=>(
                    <tr className='border-2 p-4   text-center'>
                        <td className="w-1/12   p-2 border-2" >{i+1}</td>
                        <td className="w-1/12   p-2 border-2">{category. category_name}</td>
                        <td className="w-1/12   p-2 border-2">
                            <Link  href = {`/admin/category/${category._id}`} className='bg-green-600 hover:bg-green-400 p-2 text-white rounded-lg'>Update</Link>
                            <Link href={''} className='bg-red-600 rounded-lg hover:bg-red-400  p-2 text-white'
                            onClick={handleDelete(category._id)}
                            >Delete</Link>
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