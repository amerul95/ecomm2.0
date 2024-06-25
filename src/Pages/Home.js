import React from 'react'
import { Megasale } from '../components/megasale/Megasale.js';
import { PopularProduct } from '../components/popularproduct/PopularProduct.js';
import { Subscribe } from '../components/subscribe/Subscribe.js';

export default function home() {
  return (
    <div>
      <Megasale/>
      <PopularProduct/>
      <Subscribe/>
    </div>
  )
}
