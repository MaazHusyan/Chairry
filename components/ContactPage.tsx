import React from 'react'
import Image from 'next/image'
import pic from '../public/Getintouch.png'
import picTwo from '../public/APW.png'
import submit from '../public/submit.png'
import HW from '../public/HW.png'

function ContactPage() {
  return (
    <main>
      <div>
        <div className=' flex items-center justify-center mt-12 mb-12'>
          <Image src={pic} alt='' height={90} />
        </div>
        <div className=' flex items-center justify-center gap-5 mb-12'>
          <div>
            <Image src={picTwo} alt='' height={600} />
          </div>
          <div>
            <div className='text-[rgb(39,35,67)]'>
              <h5 className='text-[2px] font-bold mb-5 mt-7 '>Your Name</h5>
              <input className=' border-[rgba(39,35,67,0.49)] border rounded-md p-3 pl-5 w-[400px]' type="text" placeholder='abc' />
            </div>
            <div className='text-[rgb(39,35,67)]'>
              <h5 className='text-[2px] font-bold mb-5 mt-7 '>Email Address</h5>
              <input className=' border-[rgba(39,35,67,0.49)] border rounded-md p-3 pl-5 w-[400px]' type="text" placeholder='abc@def.com' />
            </div>
            <div className='text-[rgb(39,35,67)]'>
              <h5 className='text-[2px] font-bold mb-5 mt-7 '>Subject</h5>
              <input className=' border-[rgba(39,35,67,0.49)] border rounded-md p-3 pl-5 w-[400px]' type="text" placeholder='This is an optional' />
            </div>
            <div className='text-[rgb(39,35,67)]'>
              <h5 className='text-[2px] font-bold mb-5 mt-7  '>Massege</h5>
              <input className=' border-[rgba(39,35,67,0.49)] text-[2px] border rounded-md p-3 pb-16 pl-5  w-[400px]' type="text" placeholder="Hi! I'd like to ask about" />
            </div>
            <div className=' mt-7'>
              <Image src={submit} alt='' width={200}/>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex items-center justify-center'>
        <div>
          <Image src={HW} alt='' height={230}/>
        </div>
      </div>
    </main>
  )
}

export default ContactPage