import React from 'react'
import { Megasale } from '../components/megasale/Megasale.js';
import { PopularProduct } from '../components/popularproduct/PopularProduct.js';
import { Subscribe } from '../components/subscribe/Subscribe.js';

export default function home() {
  const images = [
    '/images/56-wireless-earphones-photo1-20221-26122546(1)'
  ]
  return (
    <div>
      <img src={} alt="" />
      <Megasale/>
      <PopularProduct/>
      <Subscribe/>
    </div>
  )
}
