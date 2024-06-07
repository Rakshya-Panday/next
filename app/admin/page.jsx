import React from 'react'
import Link from 'next/link'

const AdminPage = () => {
  return (
    <div className='min-h-screen'>
    <div className='grid grid-cols-12 '>
        <div className='grid col-span-3 bg-gray-200'>
           <Link href = "admin/dashboard">DashBoard</Link>
           <Link className='bg-red-500' href = "/admin/category">Category</Link>
        </div>
        <div className=''>
            
        </div>

    </div>
    </div>
  )
}

export default AdminPage