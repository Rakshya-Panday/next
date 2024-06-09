import Link from 'next/link'
import React from 'react'



const layout = ({children}) => {
  return (
    <>
   
   <div className='min-h-[500px] bg-blue-500'>
    <div className='grid grid-cols-12 '>
        <div className='grid col-span-3 bg-gray-200'>
           {/* <Link href = "admin/dashboard">DashBoard</Link>
           <Link className='' href = "/admin/category">Category</Link>
           <Link className='' href = "/admin/category">Product</Link> */}
           <ul>
            <li>DashBoard</li>
            <li>Product</li>
           </ul>
        </div>
        <div className=' grid col-span-9 m-auto bg-gray-100'>
            {children}
        </div>

    </div>
    </div>
    </>
  )
}

export default layout