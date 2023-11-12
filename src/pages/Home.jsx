import React from 'react'
import HeroSection from '../components/HeroSection'
import BestSeller from '../components/BestSeller'
import Testimonial from '../components/Testimonial'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className=' w-[390px] md-[1140px]'>
      <HeroSection/>
      <BestSeller />
      <Testimonial/>
      <Product/>
    </div>
  )
}

export default Home