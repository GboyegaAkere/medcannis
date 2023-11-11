import React from 'react'
import F1 from "../assets/images/F1.png"
import F2 from "../assets/images/F2.png"
import F3 from "../assets/images/F3.png"
import Truck from "../assets/images/truck.png"
import Coin from "../assets/images/coin.png"
import Home from "../assets/images/home.png"

const HeroSection = () => {
  return (
    <>
      <div className=" w-[390px] md:w-[1440px] h-[720px] bg-green-800 flex flex-col md:flex-row mx-auto md:justify-center items-center pt-[50px] ">
        <div className='flex flex-col'>
          <p className='font-normal tracker-wider  text-yellow-300'>BEST SELLER</p>
            <div className='w-[338px] h-[76px] md:w-[672px] md:h-[140px]'>
              <p className='text-3xl md:text-5xl text-white font-semibold tracking-wider '>BEST DISPENSARY TO BUY WEED ONLINE </p>
            </div>
          <p className='text-white text-sm mt-10'>Vitamins & Supplements</p>
          <div className='flex flex-row items-center gap-2 mt-10 w-[275px] h-[27px] md:w-[356px] md:h-[56px]'>
            <p className='text-sm md:text-2xl font-semibold text-white'>Get 25% off</p>
            <p className='text-gray-100'>|</p>
            <p className='text-sm md:text-2xl  font-semibold text-white'>Free Shipping</p>
          </div>
          <div className='w-[145px] h-[56px] md:w-[185px] md:h-[64px] cursor-pointer hover:bg-green-950 bg-green-500 transition-all ease-in-out duration-100 rounded-full flex items-center  justify-center mt-6'>
            <p className='text-white'>Shop All</p>
          </div>
        </div>

        <div className='mr-[95px] '>
          <div className='flex flex-row '>
            <img src={F1} alt="" />
            <img src={F2} alt="" />
          </div>
          <div className='flex items-center ml-[95px] md:ml-[105px]'>
          <img src={F3} alt="" />
          </div>
        </div>
        
      </div>

      <div className='w-[390px] mb-30 h-[654px] gap-10 md:w-[1440px] md:h-[356px] pr-20 px-10 flex flex-col md:flex-row items-center mx-auto md:gap-4 pt-8 bg-sec'>
        <div className='md:w-[416px] md:h-[172px] flex flex-row gap-4 mb-8'>
          <div className=' w-[64px] h-[64px] md:w-[100px] md:h-[100px] rounded-full bg-white flex items-center justify-center'>
            <img src={Truck} alt="" className='w-[36px] h-[36px] md:w-[56px] md:h-[56px]' />
          </div>
          <div className='w-[254px] h-[105px] md:w-[292px] md:h-[172px] gap-4'>
            <p className=' font-bold'>Reliable Shipping</p>
            <p>Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
          </div>
        </div>
       

        <div className=' md:w-[416px] md:h-[172px] flex flex-row gap-4 mb-8'>
          <div className='w-[64px] h-[64px] md:w-[100px] md:h-[100px] rounded-full bg-white flex items-center justify-center'>
            <img src={Coin} alt="" className='w-[36px] h-[36px] md:w-[56px] md:h-[56px]' />
          </div>
          <div className='w-[254px] h-[105px] md:w-[292px] md:h-[172px] gap-4'>
            <p className='font-bold'>You’re Safe With Us</p>
            <p>Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.</p>
          </div>
        </div>

        <div className='md:w-[416px] md:h-[172px] flex flex-row gap-4 mb-4'>
          <div className='w-[64px] h-[64px] md:w-[100px] md:h-[100px] rounded-full bg-white flex items-center justify-center'>
            <img src={Home} alt="" className='w-[36px] h-[36px] md:w-[56px] md:h-[56px]' />
          </div>
          <div className='w-[254px] h-[105px] md:w-[292px] md:h-[172px] gap-4'>
            <p className=' font-bold'>Best Quality & Pricing</p>
            <p>Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely</p>
          </div>
        </div>
      </div>

     <div className=' md:mx-auto mx-auto  w-[342px] h-[114px] md:w-[948px] md:h-[140px] flex  ml-12 md:justify-center  items-center '>
         <p className=' text-2xl md:text-4xl flex font-bold  '>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</p>
     </div>
    </>
  )
}

export default HeroSection