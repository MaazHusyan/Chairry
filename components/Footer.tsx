import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import fb from '../public/facebook.png'
import twit from '../public/twiter.png'
import ins from '../public/insta.png'
import pin from '../public/pintrest.png'
import yt from '../public/YT.png'
import sub from '../public/subs.png'
import pay from '../public/paypal2.png'

function Footer() {
    return (
        <main className=' items-center justify-center' >
            <hr />
            <div className=' flex items-start justify-around h-[323px] w-9020px] '>
                <div className=' items-center justify-around text-xs pt-16 '>
                    <div className='flex items-center gap-1'>
                        <Image src={logo} alt='img' width={40} />
                        <p className='text-[rgb(39,35,67)] font-semibold'>Comforty</p>
                    </div>
                    <div className='mt-4 '>
                        <p className='text-[rgb(39,35,67)]  opacity-60 block text-left font-sans text-[1px] font-thin '>
                            Vivamus tristique odio sit amet velit semper,<br /> eu posuere turpis interdum. <br />
                            Cras egestas purus
                        </p>
                    </div>

                    <div className='flex gap-3 items-center mt-4'>
                        <Image src={fb} alt='img' width={33} />
                        <Image src={twit} alt='img' width={33} />
                        <Image src={ins} alt='img' width={33} />
                        <Image src={pin} alt='img' width={33} />
                        <Image src={yt} alt='img' width={33} />
                    </div>
                </div>

                <div className='items-center justify-around pt-16'>
                    <p className='text-[rgb(39,35,67)] text-[2px] opacity-60 block '>CATEGORY</p>
                    <ul className='decoration-0 mt-3 text-[rgb(39,35,67)] text-[4px]  '>
                        <li>Sofa</li>
                        <li>Armchair</li>
                        <li>Wing Chair</li>
                        <li className=' underline text-[rgb(0,117,128)] '>Desk Chair</li>
                        <li>Wooden Chair</li>
                        <li>Park Bench</li>
                    </ul>
                </div>


                <div className='items-center justify-around pt-16'>
                    <p className='text-[rgb(39,35,67)] text-[2px] opacity-60 block '>SUPPORT</p>
                    <ul className='decoration-0 mt-3 text-[rgb(39,35,67)] text-[14px]  '>
                        <li>Help & Support</li>
                        <li>Tearms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                    </ul>
                </div>


                <div className='items-center justify-around pt-16'>
                    <p className='text-[rgb(39,35,67)] text-[14px] opacity-60 block '>NEWSLETTER</p>

                    <div className='flex items-center gap-1  mt-3'><
                        input className=' text-[6px] pl-5 border border-[rgb(225,227,229)] border-12 border-lg w-[225px] h-[36px]
                 text-[rgba(39,35,67,0.6)] focus:outline-none rounded-lg' type="text" placeholder='Your Email' />
                        <Image src={sub} alt='img' width={107} />
                    </div>
                    <p className='text-[rgb(39,35,67)] text-[14px] mt-3 opacity-60 block '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.
                    </p>
                </div>



            </div>
            <hr />

            <div className='flex items-center justify-around h-[65px]'>
                <div>
                    <p className='text-[rgb(39,35,67)] text-[14px] mt-3 '>
                        <span className=' opacity-60'>@ 2021 - Blogy - Designed & Develop by</span> <span className='text-[rgb(39,35,67)] opacity-100'>Zakirsoft</span>
                    </p>
                </div>
                <div>
                    <Image className=' opacity-50 pt-2'  src={pay} alt='img' width={227} height={27} />
                </div>

            </div>
        </main>
    )
}

export default Footer