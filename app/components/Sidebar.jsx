'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  let pathname = usePathname()

  let active = 'text-2xl bg-gray-300 text-white ps-4'

  return (
    <>
      <ul className='flex flex-col px-5 py-5 min-h-[79vh] bg-gray-200'>
        <li><Link href='/admin' className={` w-full block py-2  ${pathname.match(/admin$/)&&active}`}>Dashboard</Link></li>
         <li><Link href='/admin/category' className={` w-full block py-2  ${pathname.match(/category/)&&active}`}>Category</Link></li>
        <li><Link href='/admin/product' className={` w-full block py-2  ${pathname.match(/products/)&&active}`}>Products</Link></li>
        <li><Link href='/admin/users' className={` w-full block py-2  ${pathname.match(/users/)&&active}`}>Users</Link></li>
        <li><Link href='/admin/orders' className={` w-full block py-2  ${pathname.match(/orders/)&&active}`}>Orders</Link></li>
      </ul>
    </>
  )
}

export default Sidebar