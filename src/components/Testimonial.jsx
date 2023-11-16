import React from 'react'
import {BiSolidStar} from "react-icons/bi"
import Group1 from '../assets/images/group1.png'
import Group2 from '../assets/images/group2.png'

const Testimonial = () => {
  return (
    <div className='mt-10'>
        <div className='md:w-[815px] w-[342] h-[76] md:h-[70px] md:ml-[230px] mx-auto mb-3 flex  items-center justify-center'>
            <p className='text-4xl font-bold'>CUSTOMER TESTIMONIALS</p>
        </div>
        <div className='w-[1612px] md:h-[424px] md:justify-center md:pr-[240px] md:mx-10 ml-6 gap-4 flex  md:flex-row md:items-center flex-col mt-9 '>
            <div className='w-[342px] h-[424px] bg-green-900 mb-3 flex flex-col gap-3  justify-center rounded-lg'>
                <div className='w-[299] h-[152]  px-10'>
                    <p className='text-3xl text-white font-semibold'>VOTED BEST ONLINE DISPENSARY IN CANADA</p>
                </div>
                <div></div>
                <div>
                    <div className='px-10'>
                        <div className='mb-3'>
                            <p className='mb-5 text-2xl font-bold text-gray-400'>Google</p>
                            <p>EXCELLENCET</p>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='flex flex-row items-center'>
                                <BiSolidStar className='text-yellow-400 text-2xl'/>
                                <BiSolidStar className='text-yellow-400 text-2xl'/>
                                <BiSolidStar className='text-yellow-400 text-2xl'/>
                                <BiSolidStar className='text-yellow-400 text-2xl'/>
                                <BiSolidStar className='text-yellow-400 text-2xl'/>
                            </div>
                            <p>|</p>
                            <p>on 131 <span className='text-gray-400 font-bold'>Reviews</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center gap-4'>
                <div className='w-[300px] h-[424px] shadow-lg border ml-5 flex flex-col gap-3 items-center  justify-center rounded-lg'>
                    <div className='w-[252px] h-[252px]'>
                        <div className='w-[135px] h-[36px] flex flex-row items-center mt-5 gap-3'>
                        <img src={Group1} alt="" /> 
                        <div className='flex flex-row items-center gap-1'>
                            <p>Jonas</p>
                            <p>Tucker</p>
                        </div>
                        </div>
                        <hr className='mt-10 text-2xl mx-auto'></hr>
                        <div className='flex flex-row items-center mt-5'>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-gray-200 text-2xl'/>
                        </div>
                        <div className='w-full h-[120px] mt-2'>
                            <p>Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.</p>
                        </div>
                        <p>January 15, 2023</p>
                    </div>
                </div>

                <div className='w-[300px] h-[424px] border shadow-lg flex flex-col gap-3 items-center  justify-center rounded-lg'>
                    <div className='w-[252px] h-[252px]'>
                        <div className='w-[135px] h-[36px] flex flex-row items-center mt-5 gap-3'>
                        <img src={Group2} alt="" /> 
                        <div className='flex flex-row items-center gap-1'>
                            <p>Mike</p>
                            <p>Vikki</p>
                        </div>
                        </div>
                        <hr className='mt-10 text-2xl mx-auto'></hr>
                        <div className='flex flex-row items-center mt-5'>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-yellow-400 text-2xl'/>
                            <BiSolidStar className='text-gray-200 text-2xl'/>
                        </div>
                        <div className='w-full h-[120px] mt-2'>
                            <p>Best damn place to buy your canabis at great prices.</p>
                        </div>
                        <p>January 5, 2023</p>
                    </div>
                </div>

            </div>
           
        </div>
    </div>
   
  )
}

export default Testimonial