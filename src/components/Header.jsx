import React from 'react'
import Logo from "../assets/images/Logo.png"
import { BsSearch } from 'react-icons/bs';
import {PiHandbagBold} from "react-icons/pi"
import {FiMenu} from "react-icons/fi"
import {IoIosArrowDown} from "react-icons/io"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className='hidden md:w-[1440px] md:h-[76px] md:flex mx-auto flex-row items-center justify-between pr-[110px] border-b-2 border-gray-100'>
         <a href="./"><img src={Logo} alt="" className='w-[270px] h-[40px] object-contain' /></a>
        <div className='flex flex-row items-center gap-2'>
          <input type="text" placeholder='Search' className='w-[400px] pl-4 h-[48px] rounded-full border-2 border-gray-100' />
          <div className='w-[48px] h-[48px] bg-green-500 rounded-full flex justify-center items-center'>
           <BsSearch className='w-[18px] h-[18px]'/> 
          </div>
        </div>

        <div className='flex flex-row items-center gap-2 '>
          <p className='font-semibold'>Your Accout</p>
          <p className='text-gray-200'>|</p>
          <Link to="/cart" className='relative'>
            <PiHandbagBold className='w-[24px] h-[24px]'/>
            <div className='absolute bottom-1 left-3 w-[16px] h-[16px] bg-red-600 rounded-full flex justify-center items-center'>
              <p className='text-white'>0</p>
            </div>
          </Link>
        </div>
      </div>

      <div className=' md:hidden w-[390px] h-[56px] flex mx-auto  flex-row justify-between items-center pr-[12px] pl-[10px] border-b-2 border-gray-100'>
          <FiMenu className='w-[24px] h-[24px]'/>
          <img src={Logo} alt="" 
          className='w-[155px] h-[28px] object-contain' 
          />
           <div className='flex flex-row items-center gap-2'>
          <p className='font-semibold'>Your Accout</p>
          <p className='text-gray-200'>|</p>
          <div className='relative'>
            <PiHandbagBold className='w-[24px] h-[24px]'/>
            <div className='absolute bottom-1 left-3 w-[16px] h-[16px] bg-red-600 rounded-full flex justify-center items-center'>
              <p className='text-white'>0</p>
            </div>
          </div>
        </div>
        
      </div>
        <div className= 'md:hidden flex flex-row items-center mx-auto gap-2 mt-2  w-[390px] h-[60px]'>
          <input type="text" placeholder='Search' className='w-[298px] pl-3  h-[36px] rounded-full border-2 border-gray-100' />
          <div className='w-[36px] h-[36px] bg-green-500 rounded-full flex justify-center items-center mr-12'>
           <BsSearch className='w-[18px] h-[18px]'/> 
          </div>
        </div>
        <div className=' hidden md:flex flex-row items justify-center items-center gap-8 w-[1440px] h-[56px]'>
            <ul>
              <li>Shop All</li>
            </ul>
            <ul className='flex flex-row items-center gap-1'>
              <li>Flower</li>
              <IoIosArrowDown/>
            </ul>
            <ul>
              <li>Edibles</li>
            </ul>
            <ul className='flex flex-row items-center gap-1'>
              <li>Concentrates</li>
              <IoIosArrowDown/>
            </ul>
            <ul>
              <li>Mushrooms</li>
            </ul>
            <ul className='flex flex-row items-center gap-1'>
              <li>Promotions/Bundles</li>
              <IoIosArrowDown/>
            </ul>
            <ul className='flex flex-row items-center gap-1'>
              <li>Support</li>
              <IoIosArrowDown/>
            </ul>
            <ul>
              <li>Reward</li>
            </ul>
            <ul >
              <li>Blog</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header