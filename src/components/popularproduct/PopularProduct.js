import React from 'react'
import './popular.css'
import MultipleItems from '../imageslider/MultipleItems'

export const PopularProduct = () => {
  return (
    <div className='max-w-7xl px-2 mx-auto sm:px-6 lg:px-8 m-2 flex my-4 md:my-8'>
      <div className=' '>
        <h2 className='text-3xl font-semibold'>POPULAR PRODUCTS <hr className='custom-hr'/></h2>
    </div>
    <div>
      <MultipleItems/>
    </div>
    </div>

  )
}
