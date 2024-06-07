import Link from 'next/link'
import React from 'react'



const layout = ({children}) => {
  return (
    <>
   
   <div className='min-h-screen'>
    <div className='grid grid-cols-12 '>
        <div className='grid col-span-3 bg-gray-200'>
           <Link href = "admin/dashboard">DashBoard</Link>
           <Link className='bg-red-500' href = "/admin/category">Category</Link>
        </div>
        <div className=''>
            {children}
        </div>

    </div>
    </div>
    </>
  )
}

export default layout