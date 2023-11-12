import React from 'react'
import Weed1 from "../assets/images/weed1.png"
import Weed2 from "../assets/images/weed2.png"
import {BiSolidStar} from "react-icons/bi"
import { products } from '../data/product'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const BestSeller = ({data}) => {
    // const [product,setProduct] = React.useState(products)

    // const filterProducts = (category) => {
    //     const filteredProducts = product.filter(products => products.category === category);
    //     setProduct(filteredProducts);
    //   };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div>
        <div className='w-[434px] h-[40px] md:w-[1200px] md:h-[48px] flex gap-2  justify-centerflex-row  md:ml-20 '>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button className=''>Best Seller</button>
            </div>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button>Bundles & Promotions</button>
            </div>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button>On Sale</button>
            </div>
        </div>

        <div className='w-[1348px] md:h-[568px] md:justify-center md:mx-auto gap-4 flex  md:flex-row md:items-center flex-col mt-10 '>
            <div className='w-[342px] h-[568px] ml-5 md:ml-10 md:mx-auto bg-green-900 gap-4 flex flex-col items-center justify-center rounded-lg'>
                <div className='w-[213px] h-[213px]'>
                    <img src={Weed1} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <p className='font-bold text-white'>Shop our Best Sellers</p>
                    <div className='w-[200px] h-[84px] '>
                     <p className='text-sec'>Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat.</p>
                    </div>
                    <p className='text-green-700 underline'> <a href="">View All</a></p>
                </div>
            </div>
            
           <div className='flex flex-row items-center mx-5  gap-4'>
           {products && products.map((items,index)=>{
                    return(
                        <div key={index} className='w-[291px] h-[568px]  md:mx-auto ml-6 border-2  border-gray-100 rounded-lg '> 
                            <div className=' w-[291px] rounded-lg h-[240px] bg-gray-200 flex items-center justify-center'>
                                <img src={items.image} alt="" />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-3 mt-3'>
                                <p>{items.title}</p>
                                <div className='w-[291px] h-[54px] flex flex-col items-center justify-center px-5'>
                                    <p className='font-bold'>{items.description}</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <p className='text-yellow-400 text-2xl'><BiSolidStar/></p>
                                    <p className='font-bold'>4.6/5</p>
                                    <p className='text-gray-300'>|</p>
                                    <p><span className='font-bold'>135</span> <span className='text-gray-200'>Reviews</span></p>
                                </div>
                                <div className='w-[92px] h-[28px] bg-sec flex items-center justify-center rounded-lg'>
                                    <p className='text-sm'>{items.energy}</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <span className='text-gray-200 text-sm'>{items.prevPrice}</span>
                                    <span className='text-red-500 font-bold text-sm'>{items.newPrice}</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-4'>
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
                                <div className='w-[128px] h-[40px] bg-green-500 flex items-center justify-center rounded-full'>
                                    <button className='text-white'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                   })}  
    
           </div>
        </div>
    </div>
  )
}

export default BestSeller