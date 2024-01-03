import React from 'react'
import { products } from '../../constants/Index'
import PopularProductCard from '../../Component/PopulerProductcard'

const PropulerProduct = () => {
  // console.log('produss',products);
  
  return (
    <section id='products' className='sm:px-6 lg:px-8 py-10 px-4 mt-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-extrabold text-gray-900 mt-20'>
          Our <span className='text-orange-500'>Populer</span> Products
        </h2>
        <p className='mt-10 max-w-2xl text-xl text-gray-500 '>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className='flex flex-wrap ml-2 mt-4 justify-center gap-10 grid-cols-1  '>
        <a href='/' className='flex flex-wrap ml-2 mt-10 justify-center gap-10 grid-cols-1'>

        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product} />
        ))}
        </a>
      </div>
    </section>
  )
}

export default PropulerProduct