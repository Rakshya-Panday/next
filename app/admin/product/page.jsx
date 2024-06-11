"use client"
// import { deleteCategory, getAllCategories } from '@/app/api/categoryApi'
import { deleteProduct, getAllProducts } from '@/app/api/productApi'
import { isAuthenticated } from '@/app/api/userApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    let[product,setProduct] = useState([])
    let[token,setToken] = useState('')
    let[success,setSuccess] = useState(false)

    useEffect((error)=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProduct(data)
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
                deleteProduct(id,token)
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
    <div className='mb-6'>
    <Link className='ml-7 text-2xl text-blue-600 ' href={'/admin/product/new'}>Add new Product</Link>
    <h1 className='text-2xl underline font-bold text-center mt-5'>Products</h1>
  
    <table className="border-2 border-gray-300 ml-10 w-full mt-2">
        <thead className='border-2'>
            <tr className='font-semibold text-center'>
                <td className="w-2/12  border-2">S.N</td>
                <td className="w-3/12  border-2">Product Image</td>
                <td className="w-2/12  border-2">Title</td>
                <td className="w-2/12  border-2">Unit Price</td>
                <td className="w-1/12  border-2">Description</td>
                <td className="w-2/12  border-2">Category</td>
                <td className="w-2/12  border-2">Stock</td>
                <td className="w-[200px]  border-2">Action</td>
            </tr>
        </thead>
        <tbody>
            {
                product.length>0 &&
                product.map((product,i)=>(
                    <tr className='border-2 p-4   text-center'>
                        <td className="w-1/12   p-2 border-2" >{i+1}</td>
                        <td className="w-1/12   p-2 border-2">
                        <img src= {`http://localhost:5000/${product.product_image}`}/>
                        </td>
                        <td className="w-1/12   p-2 border-2" >{product.title}</td>
                        <td className="w-1/12   p-2 border-2" >{product.price}</td>
                        <td className="w-1/12   p-2 border-2" >{product.description}</td>
                        <td className="w-1/12   p-2 border-2" >{product.category}</td>
                        <td className="w-1/12   p-2 border-2" >{product.counting_stock}</td>
                        <td className="w-1/12   p-2 border-2">
                            <Link  href = {`/admin/product/${product._id}`}>Update</Link>
                            <Link href={''} className='bg-red-600 rounded-lg hover:bg-red-400  p-2 text-white'
                            onClick={handleDelete(product._id)}
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