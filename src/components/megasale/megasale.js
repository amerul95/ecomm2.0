import React from 'react';
import man_adult from '../../Assets/man-adult.png'
import './megasale.css'

export const Megasale = () => {
  return (
    <div className='bg-container max-w-7xl px-2 mx-auto sm:px-6 lg:px-8 m-2 flex my-4 md:my-8 justify-center flex'>
        <div>
            <img className='hidden sm:block w-52 md:w-full' src={man_adult} alt="" />
        </div>
        <div className='flex flex-col justify-center md:gap-8 ml-10 '>
            <h2 className='h2-ms text-3xl md:text-6xl font-bold'>MEGA SALE - 30%</h2>
            <p className='p-ms text-lg md:text-2xl'>Casual collection for men's <br /> We all have choices for you.Check it out</p>
            <button class="bg-color text-white font-bold py-2 px-4 rounded max-w-64 mt-2">
             SHOW MORE
            </button>
        </div>
    </div>
  );
};
