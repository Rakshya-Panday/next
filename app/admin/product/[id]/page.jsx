"use client"
import { getAllCategories } from "@/app/api/categoryApi";
import { addProduct, getProducts } from "@/app/api/productApi";
import { isAuthenticated } from "@/app/api/userApi";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  let [categories, setCategories] = useState([])
  const[product,setProduct] = useState({
    title: "",
    price:"",
    description : "",
    category:"",
    counting_stock:"",
    product_image:"",
    formdata: new FormData
  });
  let id = useParams()?.id

  let sel_ref = useRef()
  let file_ref = useRef()
  const[token,setToken] = useState("")
  let {title,price,description,category,counting_stock,product_image,formdata}=product

  const handleChange = (e)=>{
    console.log(e.target.name, e.target.value)
    if (e.target.name === "image") {
      formdata.set("product_image", e.target.files[0])
  }
  else {
      formdata.set(e.target.name, e.target.value)
      setProduct({ ...product, [e.target.name]: e.target.value })
      sel_ref.current.value=data.categories._id
  }
  }

  useEffect(()=>{
    getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories({...data,formdata:new FormData})
                }
            })

        isAuthenticated()
            .then(data => setToken(data.token))

            if(id){
                getProducts(id)
                .then(data=>{
                    if(data.error){
                        console.log(data.error)
                    }
                    else{
                        setProduct(data)
                    }
                })
            }
  },[])

  const handleUpdate = (e)=>{
      e.preventDefault();
      addProduct(formdata,token)
      .then(data=>{
        if( data && data.error){
          Swal.fire('error', data.error, 'error')

        }
        else{
          Swal.fire('success','Product Updated Successfully','success')
            setProduct({title:""
                ,price:""
                ,description:""
                ,category:"",
                counting_stock:"",
                product_image:"",
                  formdata: new FormData})
                    sel_ref.current.value = ''
                    file_ref.current.value = ''
                
            
          
        }
      })
  }


 
  return (
  <>
      
        <div className='p-5 rounded-lg shadow-lg w-full  mt-8 border-2'>
          <h2 class="mb-4 text-2xl font-semibold text-center">Add product</h2>
          <form  className="w-full">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                <label for="name">Product Name :</label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="w-[500px] p-2 rounded-xl"
                  placeholder="Type product name"
                  required=""
                  value={title}

                  onChange={handleChange}/>
              </div>
              <div>
                <label for="user_avatar">Product Image</label>
                <input
                  className="w-[250px] p-2 rounded-xl"
                  id="user_avatar"
                  name="product_image"
                  type="file"
                  onChange={handleChange}/>
              <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
              </div>
              
              <div class="w-full">
                <label for="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-[250px] p-2  rounded-xl"
                  placeholder=""
                  required=""
                  value={price}
                  onChange={handleChange}/>
              </div>
              <div>
                <label for="category">Category</label>
                <select
                  id="category"
                  ref={sel_ref}
                  name="category"
                  className="w-[250px] p-2 rounded-xl">
                  <option selected="">Selece Category</option>
                  {
                    categories.length>0 &&
                    categories.map(category=>{
                      return <option value={category._id} key={category._id}>{category.category_name}</option>
                    })
                  }
                  
                  onChange={handleChange}
                </select>
              </div>
              <div>
                <label for="item-weight"> Count_InStock</label>
                <input
                  type="number"
                  name="counting_stock"
                  id="item-weight"
                  className="w-[250px] p-2 rounded-xl"
                  placeholder=""
                  required=""
                  value={counting_stock}
                  onChange={handleChange}/>
              </div>
              <div class="sm:col-span-2">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  rows="8"
                  name="description"
                  className="w-full p-2 rounded-xl"
                  value={description}
                  placeholder="Write a product description here..."
                  onChange={handleChange}></textarea>
              </div>
              <button className='border-2 p-2 mt-4 bg-blue-600 w-full m-auto text-white rounded-lg'
              onClick={handleUpdate}>Add Product</button>
            </div>
           
          </form>
        </div>
    
    </>
  );
};

export default page;
