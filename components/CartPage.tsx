import React from 'react'
import Image from 'next/image'
import cartP from '../public/cartPage.png'
import cartPTwo from '../public/cartpagetwo.png'

function CartPage() {
  return (
    
    <main>
        <div className=' flex items-center justify-center'>
          <div className='mr-12 mt-12   '>
            <Image src={cartP} alt="" height={400}/>
          </div>
          <div className=' mb-24'>
            <Image src={cartPTwo} alt="" height={150}/>
          </div>
        </div>
    </main>
  )
}

export default CartPage