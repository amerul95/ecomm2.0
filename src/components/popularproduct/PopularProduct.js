import React from 'react'
import './popular.css'
import MultipleItems from '../imageslider/MultipleItems'

export const PopularProduct = () => {

  const images = {
    img1:'./images/image1.png',
    img2:'./images/image2.png'
  }
  
  return (
    <div className='max-w-7xl px-2 mx-auto sm:px-6 lg:px-8 m-2 flex my-4 md:my-8 flex-col'>
      <div className=' '>
        <h2 className='text-3xl font-semibold'>POPULAR PRODUCTS <hr className='custom-hr'/></h2>
    </div>
    <div>
      <img src={images.img2} alt="" />
      <MultipleItems/>
    </div>
    </div>

  )
}
