"use client"
import { getAllCategories } from '@/app/api/categoryApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    let[categories,setCategories] = useState([])

    useEffect((error)=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
            }
        })
    },[])
  return (
    <>
    <h1 className='text-2xl underline font-bold text-center'>Categories</h1>
    <Link href={'/admin/category/new'}>Add new Category</Link>
    <table>
        <thead>
            <tr>
                <td>S.N</td>
                <td>Category Name</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                categories.length>0 &&
                categories.map((category,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{category. category_name}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
     
    </>
  )
}

export default page