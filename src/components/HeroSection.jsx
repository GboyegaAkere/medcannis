import React from 'react'
import F1 from "../assets/images/F1.png"

const HeroSection = () => {
  return (
    <div className=" w-[390px] md:w-[1440px] h-[720px] bg-green-800 flex flex-row justify-center items-centers pt-[85px] ">
      <div className='flex flex-col'>
        <p className='text-yellow-300'>BEST SELLER</p>
          <div className='w-[672px] h-[140px]'>
            <p className='text-5xl  text-white font-semibold tracking-wider '>BEST DISPENSARY TO <br></br>BUY WEED ONLINE </p>
          </div>
        <p className='text-white'>Vitamins & Supplements</p>
        <div className='flex flex-row items-center gap-2 mt-10'>
          <p className='text-2xl font-semibold text-white'>Get 25% off</p>
          <p className='text-gray-100'>|</p>
          <p className='text-2xl font-semibold text-white'>Free Shipping</p>
        </div>
        <div className='w-[185px] h-[64px] cursor-pointer bg-green-500 rounded-full flex items-center  justify-center mt-6'>
          <p>Shop all</p>
        </div>
      </div>

      <div className=''>
        <div className='flex flex-row'>
          <img src={F1} alt="" />
          <img src={F1} alt="" />
        </div>
        <div className='flex items-center ml-20'>
         <img src={F1} alt="" />
        </div>
        
      </div>
      
    </div>
  )
}

export default HeroSection