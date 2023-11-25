import React from 'react'
import Weed1 from "../assets/images/weed1.png"
import { FaStar } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { PiBrainThin } from "react-icons/pi";
import { AiTwotoneFire } from "react-icons/ai";

const Details = () => {
  return (
    <div className='w-[1440px] h-[1163px] mx-auto mt-10'>
      <div className='w-[1200px] h-[1163px] mx-auto flex flex-row gap-10'>
          <div className='w-[573px] h-[608px] flex justify-center border bottom-1'>
            <img src={Weed1} alt="" className='w-[400px] h-[400px]' />
          </div>

          <div className='w-[640px] h-[1162px] border bottom-1'>
            <p>CONCENTRATE</p>
            <div className='w-[640px] h-[76px]'>
             <p className='text-2xl font-bold'>Mix And Match Shatter/Budder 28g (4 X 7G)</p>
            </div>

            <div className='flex flex-row items-center gap-5'>
              <div className='w-[70px] h-[36px] bg-sec flex items-center justify-center rounded-lg'>
                <p>indica</p>
              </div>

              <div className='w-[104px] h-[36px] bg-sec flex items-center justify-center rounded-lg'>
                <p>Sativa 100%</p>
              </div>
            </div>
            
            <div className='flex flex-row items-center justify-between mt-5 px-5'>
              <div className='flex flex-row items-center gap-3'>
                <p className='text-gray-400'>$200.00</p>
                <p className='text-red-500'>$120.00</p>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <FaStar className='text-yellow-500'/>
                <p className='font-bold'>4.6/5</p>
                <span>|</span>
                <p className='font-bold'>135 <span>Reviews</span></p>
              </div>
            </div>
            <div className='w-[640px] h-[251px] gap-10 flex flex-col'>
            <div className='flex flex-row items-center justify-center gap-4 mt-5'>
                  <BsBoxes className='text-3xl'/>
                  <div className='w-[544px] h-[42px]'>
                    <p className='text-gray-400 font-semibold'>EFFECTS</p>
                    <p className='font-semibold'>Calming, Creative, Happy, Relaxing, Sleepy, Uplifting </p>
                  </div>
                </div>

                <div className='flex flex-row items-center justify-center gap-4'>
                  <PiBrainThin className='text-3xl'/>
                  <div className='w-[544px] h-[42px]'>
                    <p className='text-gray-400 font-semibold'>MAY RELIEVE</p>
                    <p className='font-semibold'>Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</p>
                  </div>
                </div>

                <div className='flex flex-row items-center justify-center gap-4'>
                  <AiTwotoneFire className='text-3xl'/>
                  <div className='w-[544px] h-[42px]'>
                    <p className='text-gray-400 font-semibold'>AROMAS</p>
                    <p className='font-semibold'>Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</p>
                  </div>
                </div>

                
              </div>
          </div>
      </div>
    </div>
  )
}

export default Details