import React from 'react'
import {Link} from 'react-router-dom'
import cart from '../../Assets/shopping-cart (1).png'
import bbm_logo from '../../Assets/BBM_ECOMM.png'


export default function Navbar() {
  return (
    <nav>
        <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg-8'>
            <div>
                <Link to='/'><img src={bbm_logo} alt="" /></Link>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end gap-x-3'>
            <div className='self-center xl:space-x-2  hidden lg:block'>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/'>Home</Link>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/apparel'>Apparel</Link>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/technology'>Technology</Link>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/drinkware'>Drinkware</Link>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/bags'>Bags</Link>
                <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/office'>Office</Link>
            </div>
            <div className='sm:flex self-center justify-center justify-items-center justify-self-center content-center items-center space-x-4 hidden '>
                <Link className='border rounded-2xl border-slate-800 px-4 py-1 hover:bg-gray-700 hover:text-white' to='/login'>Login</Link>
                <div className='relative'>
                    <Link to={'/carts'}>
                        <img src={cart} alt="" />
                    </Link>
                    <div className='absolute top-0 right-[-20px] rounded-full px-1 text-xs text-white bg-red-600' >10</div>
                </div>
                
            </div>
            </div>
            
        </div>
        <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2 bg-slate-600 mx-2 rounded-md">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white" aria-current="page">Home</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white">Apparel</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white">Technology</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white">Drinkware</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white">Bags</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white">Office</a>
    </div>
  </div>
    </nav>
  )
}
