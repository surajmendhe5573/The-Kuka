import React from 'react'
import Hero from '../Hero/Hero'
import ProductSections from '../ProductSections/ProductSections'
import Testimonial from '../Testimonial/Testimonial'
import CustomiseProducts from '../CustomiseProducts/CustomiseProducts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductSections/>
      <Testimonial/>
      <CustomiseProducts/>
    </div>
  )
}

export default Home
