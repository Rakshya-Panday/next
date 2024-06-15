
'use client'
import { getFilterProduct } from '@/app/api/productApi'
import CategoryCheckbox from '@/app/components/CategoryCheckbox'
import PriceRadio from '@/app/components/PriceRadio'
import ProductCard from '@/app/components/ProductCard'
import React, { useEffect, useState } from 'react'

const page = () => {
  let[products,setProducts] = useState([])
 const[filters,setFilter] = useState({
  category :[],
  price:[]
})

const handleFilter = (filter,filterBy)=>{

  setFilter({...filters,[filterBy]:filter})
  console.log(filters)

}

useEffect(()=>{
getFilterProduct(filters)
.then(data=>{
  if(data.error){
    console.log(data.error)
  }
  else{
    setProducts(data)
  }
})

  
},[filters])

  return (
    <>
    <div className="grid grid-cols-5">
        <div className="col-span-1 p-3 bg-gray-100">
            <CategoryCheckbox handleFilter = {handleFilter}/>
            <PriceRadio handleFilter = {handleFilter}/>
        </div>
        <div className="col-span-4 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 p-5 gap-3">
          {
            products.length >0 &&
            products.map((product)=>{
              return <ProductCard product = {product}/>
            })
          }
        </div>
    </div>
    </>
  )
}

export default page
