import React from 'react'
import Image from 'next/image'
import PC from '../public/pinkC.png'
import rImg from "../public/rightimg.png"
// import WC from '../public/whiteC.png'
import OC from '../public/orangC.png'
import WS from '../public/whiteS.png'
// import blueC from '../public/blueC.png'
// import whiteC from '../public/cart2.png'
import WCC from '../public/WC2.png'
import stool from '../public/stools.png'

function SingleProduct() {
  return (
    <main>
      <div>
        <div className='flex items-center justify-center gap-4 mt-14 mb-14'>
          <div>
            <Image src={PC} alt='' height={350} />
          </div>
          <div className='ml-9 mb-16'>
            <Image src={rImg} alt='' height={280} />
          </div>
        </div>

        <div className='text-[rgb(39,35,67)] text-[24px] ml-40 pt-2 pb-6  flex items-center justify-start font-bold'>
          Follow products and discounts on Instagram
        </div>

        <div className='flex items-center justify-center gap-1'>
          <div>
            <Image src={OC} alt='' height={180} />
            <div className='flex items-center justify-around gap-6 mt-2 mb-24'>
              <p className='text-[rgba(39,35,67,0.51)] text-xs'>Library Stool Chair</p>
              <p className='text-[rgb(39,35,67)] text-xs'>$99</p>
            </div>
          </div>

          <div>
            <Image src={WS} alt='' height={180} />
            <div className='flex items-center justify-around gap-6 mt-2 mb-24'>
              <p className='text-[rgba(39,35,67,0.51)] text-xs'>Library Stool Chair</p>
              <p className='text-[rgb(39,35,67)] text-xs'>$99</p>
            </div>
          </div>

          <div>
            <Image src={WCC} alt='' height={180} />
            <div className='flex items-center justify-around gap-6 mt-2 mb-24'>
              <p className='text-[rgba(39,35,67,0.51)] text-xs'>Library Stool Chair</p>
              <p className='text-[rgb(39,35,67)] text-xs'>$99</p>
            </div>
          </div>

          <div>
            <Image src={stool} alt='' height={180} />
            <div className='flex items-center justify-around gap-6 mt-2 mb-24'>
              <p className='text-[rgba(39,35,67,0.51)] text-xs'>Library Stool Chair</p>
              <p className='text-[rgb(39,35,67)] text-xs'>$99</p>
            </div>
          </div>

          <div>
            <Image src={PC} alt='' height={180} />
            <div className='flex items-center justify-around gap-6 mt-2 mb-24'>
              <p className='text-[rgba(39,35,67,0.51)] text-xs'>Library Stool Chair</p>
              <p className='text-[rgb(39,35,67)] text-xs'>$99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct