import React from 'react'

const BestSeller = () => {
  return (
    <div>
        <div className='w-[434px] h-[40px] md:w-[1200px] md:h-[48px] flex flex-row justify-center items-center gap-8 md:ml-[70px]'>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button>Best Seller</button>
            </div>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button>Bundles & Promotions</button>
            </div>
            <div className='w-[378px] h-[48px] bg-sec flex items-center justify-center rounded-full'>
                <button>On Sale</button>
            </div>
        </div>

        <div className='w-[1348px] h-[568px]'>

        </div>
    </div>
  )
}

export default BestSeller