"use client"
import React, { useEffect, useState } from 'react'
import { prices } from './price'

const PriceRadio = ({handleFilter}) => {
    let[price,setPrice] = useState([])

    const handlePrice = e=>{
       let new_price = e.target.value
       let priceObj = prices.findIndex(item=>item.id == new_price)
       let priceValue = prices[priceObj].value

       setPrice(priceValue)
       handleFilter(priceValue,'price')
    //    console.log(priceValue)
    }
  return (
   <>
   <h1 className='text-2xl underline font-bold'>Prices</h1>
   {
    prices.map((price)=>{
        return <div class="flex items-center mb-4">
            <input id={price._id} type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
            value = {price.id} name='price'
            onChange={handlePrice}
            />
            <label for={price._id} class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{price.title}</label>
        </div>
    })
   }
   </>
  )
}

export default PriceRadio