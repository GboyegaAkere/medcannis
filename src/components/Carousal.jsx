import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Weed1 from "../assets/images/weed1.png"
import Weed2 from "../assets/images/weed2.png"
import {BiSolidStar} from "react-icons/bi"
import { products } from '../data/product'

const Carousal = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
        <Slider {...settings}>
        {products && products.map((items,index)=>{
                    return(
                        <div key={index} className='md:w-[291px] md:h-[568px] flex flex-row items-center justify-center'> 
                            <div className=' w-[291px] rounded-lg h-[240px] bg-gray-200 flex items-center justify-center'>
                                <img src={items.image} alt="" className='w-[291px] h-[240px]' />
                            </div>
                            <div className='w-[291px] h-[148px] flex flex-col items-center justify-center'>
                              <div>
                              <p>Flower</p>
                              </div>
                              <div className='w-[291px] h-[54px] flex items-center justify-center pl-6'>
                                <p className='font-semibold'>2 Oz Deal Watermelon Zkittles + Purple Gushers</p>
                              </div>
                              <div className='flex flex-row justify-center  items-center gap-3 w-[131px] h-[18px] md:w-[158px] md:h-[32px]'>
                                    <p className='text-yellow-400 md:text-2xl text-xs'><BiSolidStar/></p>
                                    <p className='font-bold text-xs md:text-sm'>4.6/5</p>
                                    <p className='text-gray-300 text-xs md:text-sm'>|</p>
                                    <p><span className='text-sm font-bold md:text-sm'>135</span> </p>
                                </div>
                                <div className='w-[92px] h-[28px] bg-sec flex items-center justify-center rounded-lg'>
                                    <p className='text-sm '>{items.energy}</p>
                                </div>
                            </div>
                            <div className='w-[291px] h-[148px] flex flex-col items-center justify-center'>
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
    
        </Slider>
    </div>
  )
}

export default Carousal