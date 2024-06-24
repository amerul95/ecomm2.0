import React from 'react'
import { Megasale } from '../components/megasale/Megasale.js';
import { PopularProduct } from '../components/popularproduct/PopularProduct.js';

export default function home() {
  return (
    <div>
      <Megasale/>
      <PopularProduct/>
    </div>
  )
}
