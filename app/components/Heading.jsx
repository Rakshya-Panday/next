import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='py-4 shadow-sm bg-white  '>
      <div className='container flex max-w-[1200px]  mx-auto '>
         <h2 className="font-semibold text-4xl px-8">
          online<span className="text-blue-900">Store</span>
         </h2>
         <div class="w-full md:w-1/3 mx-auto  items-center ">
          <div class="relative">
            <input
              type="text"
              className=" border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              placeholder="Search Here"
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className='flex gap-2'>
        <Link  href = '/'className='relative'>
        <div>
        <i class="bi bi-heart text-2xl px-2"></i>
        </div>
        <p className='text-sm leading-3'>Wish List</p>
        <span className='absolute  right-8 -top-1 w-4 h-4 text-sm rounded-full flex  items-center justify-center bg-blue-700 text-white '>5</span>
        </Link>
        <Link  href = '/' className='relative'>
        <div >
        <i class="bi bi-cart text-2xl px-2"></i>
        </div>
        <p className='text-sm  leading-3 '>Cart</p>
        <span className='absolute  right-8 -top-1 w-4 h-4 text-sm rounded-full flex items-center justify-center bg-blue-700 text-white '>5</span>
        </Link>
        
        <Link href = '/' className='relative'>
        <div >
        <i class="bi bi-person text-2xl px-2"></i>
        </div>
        <p className='text-sm  leading-3 '>Account</p>
        
        </Link>
        
       
        
        

        </div>
      </div>
    </header>
  )
}

export default Header