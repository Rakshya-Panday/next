import Link from 'next/link'
import React from 'react'



const layout = ({children}) => {
  return (
    <>
   
   <div className=' bg-gray-100'>
    <div className='grid grid-cols-12  min-h-[500px] '>
        <div className='grid col-span-3 bg-gray-200'>
           {/* <Link href = "admin/dashboard">DashBoard</Link>
           <Link className='' href = "/admin/category">Category</Link>
           <Link className='' href = "/admin/category">Product</Link> */}
           <ul>
            <li>DashBoard</li>
            <li>Product</li>
           </ul>
        </div>
        <div className=' grid col-span-9 w-1/2'>
            {children}
        </div>

    </div>
    </div>
    </>
  )
}

export default layout