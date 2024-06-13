
'use client'
import CategoryCheckbox from '@/app/components/CategoryCheckbox'
import PriceRadio from '@/app/components/PriceRadio'
import React, { useState } from 'react'

const page = () => {
const[filters,setFilter] = useState({
  category :[],
  price:[]
})

const handleFilter = (filter,filterBy)=>{

  setFilter({...filters,[filterBy]:filter})
  console.log(filters)

}

  return (
    <>
    <div className="grid grid-cols-5">
        <div className="col-span-1 p-3">
            <CategoryCheckbox handleFilter = {handleFilter}/>
            <PriceRadio handleFilter = {handleFilter}/>
        </div>
        <div className="col-span-4">Products</div>
    </div>
    </>
  )
}

export default page
