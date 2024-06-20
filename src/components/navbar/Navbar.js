import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../Assets/shopping-cart (1).png';
import bbm_logo from '../../Assets/BBM_ECOMM.png';
import { FiAlignJustify } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-3'>
        <div>
          <Link to='/'><img className='w-48 sm:w-60 h-full' src={bbm_logo} alt="" /></Link>
        </div>
        <div className='flex flex-1 items-center sm:items-stretch justify-end gap-x-3'>
          <div className='self-center xl:space-x-2 hidden lg:block'>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/'>Home</Link>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/apparel'>Apparel</Link>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/technology'>Technology</Link>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/drinkware'>Drinkware</Link>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/bags'>Bags</Link>
            <Link className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-1 xl:px-3 py-2 text-lg font-thin' to='/office'>Office</Link>
          </div>
          <div className='flex self-center justify-center justify-items-center justify-self-center content-center items-center space-x-4 mr-5'>
            <Link className='border rounded-2xl border-slate-800 px-4 py-1 hover:bg-gray-700 hover:text-white hidden lg:block' to='/login'>Login</Link>
            <div className='relative'>
              <Link to={'/carts'}>
                <img className='w-8 sm:w-full' src={cart} alt="" />
              </Link>
              <div className='absolute top-0 right-[-20px] rounded-full px-1 text-xs text-white bg-red-600'>10</div>
            </div>
            <div className='lg:hidden' onClick={toggleMenu}>
              {isOpen ? <RxCross2 size={24} /> : <FiAlignJustify size={24} />}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2 bg-slate-600 mx-2 rounded-md'>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/'>Home</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/apparel'>Apparel</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/technology'>Technology</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/drinkware'>Drinkware</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/bags'>Bags</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/office'>Office</Link>
            <Link className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white' to='/login'>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
