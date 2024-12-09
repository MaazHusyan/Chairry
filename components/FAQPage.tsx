import React from 'react'
import Image from 'next/image'
import pic from '../public/QLH.png'
import note from '../public/notes.png'


function FAQPage() {
    return (
        <main>

            <div className=' flex items-center justify-center mt-12 mb-12'>
                <div>
                    <Image src={pic} alt='' height={80} />
                </div>
            </div>
            <div className='flex items-center justify-center mb-12'>
                <div>
                <Image src={note} alt='' height={400}  />
                </div>
            </div>
        </main>
    )
}

export default FAQPage


//Soorryy