import React from 'react'
import { products } from '../data/product'
import {BiSolidStar} from "react-icons/bi"
import { products2 } from '../data/product'
import Carousal from './Carousal'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='mt-10'>
      <div className='w-326px h-38px md:w-[636px] flex justify-center md:mx-auto'>
        <p className='text-3xl font-semibold'>CHOOSE YOUR WEED</p>
      </div>

      <div className='w-[366px] ml-[37px] h-[112px] md:gap-4 gap-3  mt-3 md:w-[1200px] md:h-80px flex flex-col md:flex-row md:ml-[200px] md:items-center'>
          <p className='text-xl font-semibold'>Filtered by Interest:</p>
          <div className='flex flex-row items-center gap-3 md:gap-10'>
            <div className='w-[93px] md:w-[101px] md:h-[48px]  h-[40px] bg-gray-300 rounded-full flex justify-center'>
             <button>Flowers</button>
            </div>
            <div className='w-[118px] md:w-[129px] md:h-[48px]  h-[40px] bg-gray-300 rounded-full flex justify-center'>
             <button>Mushroom</button>
            </div>
            <div className='w-[124px] md:w-[136px] md:h-[48px]  h-[40px] bg-gray-300 rounded-full flex justify-center'>
             <button>Concentrate</button>
            </div>
            <div className='hidden md:w-[96px] md:h-[48px]  h-[40px] bg-gray-300 rounded-full md:flex justify-center'>
             <button>Edibles</button>
            </div>
            <div className='hidden md:w-[153px] md:h-[48px]  h-[40px] bg-gray-300 rounded-full md:flex justify-center'>
             <button>Shop All Weed</button>
            </div>
          </div>
      </div>

      <Link to="/details" className='grid md:grid-cols-4 grid-cols-2 items-center gap-5 md:ml-[165px] mx-6 justify-center w-[342px] md:w-[1200px]'>
           {products2 && products2.map((items,index)=>{
                    return(
                        <div key={index} className='w-[159px] md:w-[276px] md:h-[568px] h-[480px] border shadow-lg rounded-lg'> 
                            <div className='w-[159px] md:w-[276px] h-[160px] md:h-[240px] bg-gray-300 flex justify-center '>
                                <img src={items.image} alt="" className='md:w-[164px] w-[120px] h-[120px] md:h-[164px] mt-8' />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-3 md:gap-4 md:mt-0 mt-2'>
                                <p>{items.title}</p>
                                <div className='w-[159px] h-[72px] md:w-[276px] md:h-[54px] ml-[40px] md:ml-20'>
                                    <p className=''>{items.description}</p>
                                </div>
                                <div className='flex flex-row justify-center  items-center gap-2 w-[131px] h-[18px] md:w-[158px] md:h-[32px]'>
                                    <p className='text-yellow-400 md:text-2xl text-xs'><BiSolidStar/></p>
                                    <p className='font-bold text-xs md:text-sm'>4.6/5</p>
                                    <p className='text-gray-300 text-xs md:text-sm'>|</p>
                                    <p><span className='text-sm font-bold md:text-sm'>135</span> </p>
                                </div>
                                <div className='w-[92px] h-[28px] bg-sec flex items-center justify-center rounded-lg'>
                                    <p className='text-sm '>{items.energy}</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-gray-200 text-sm'>{items.prevPrice}</span>
                                    <span className='text-red-500 font-bold text-sm'>{items.newPrice}</span>
                                </div>
                                <div className='flex flex-row items-center justify-center w-[146px] h-[26px] gap-4'>
                                    <div className='w-[42px] h-[32px] border-2 border-gray-100 flex items-center justify-center rounded-lg'>
                                        <p className='text-sm'>28g</p>
                                    </div>
                                    <div className='w-[50px] h-[32px] border-2 border-gray-100 flex items-center justify-center rounded-lg'>
                                        <p>1/2lb</p>
                                    </div>
                                    <div className='w-[50px] h-[32px] border-2 border-gray-100 flex items-center justify-center rounded-lg'>
                                        <p>1/4lb</p>
                                    </div>
                                </div>
                                <div className='md:w-[128px] w-[117px] h-[40px] bg-green-500 flex items-center justify-center rounded-full'>
                                    <button className='text-white'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                   })}  
           </Link>
    </div>
  )
}

export default Product
