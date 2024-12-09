import React from 'react'
import Image from 'next/image'
import WC from '../public/whiteC.png'
import PC from '../public/pinkC.png'
import OC from '../public/orangC.png'
import WS from '../public/whiteS.png'
import blueC from '../public/blueC.png'
import whiteC from '../public/cart2.png'
import WCC from '../public/WC2.png'
import stool from '../public/stools.png'


function ProductMain() {
    return (
        <main>
            <div>
                <div className='text-[rgb(39,35,67)] flex items-center justify-start pl-[230px]  font-semibold pt-4 pb-8 '>
                    <h4>All Products</h4>
                </div>

                <div className='flex items-center justify-center  gap-1 pb-5'>
                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={WC} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(0,117,128)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20</span></p>
                                <Image src={blueC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={WS} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span> </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={PC} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={OC} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex items-center justify-center gap-1 pb-5 '>
                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={WS} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={WS} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span>  </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={PC} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <Image src={OC} alt='img' width={220} />
                            <div className='flex items-center gap-10 justify-around'>
                                <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                                <Image src={whiteC} alt='img' width={28} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center gap-1 pb-40 '>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <Image src={WS} alt='img' width={220} />
                        <div className='flex items-center gap-10 justify-around'>
                            <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                            <Image src={whiteC} alt='img' width={28} />
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <Image src={WS} alt='img' width={220} />
                        <div className='flex items-center gap-10 justify-around'>
                            <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span>  </span></p>
                            <Image src={whiteC} alt='img' width={28} />
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <Image src={PC} alt='img' width={220} />
                        <div className='flex items-center gap-10 justify-around'>
                            <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                            <Image src={whiteC} alt='img' width={28} />
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <Image src={OC} alt='img' width={220} />
                        <div className='flex items-center gap-10 justify-around'>
                            <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
                            <Image src={whiteC} alt='img' width={28} />
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-[rgba(30,40,50,0.05)] h-[630px]'>
                <div>
                    <div className='text-[rgb(39,35,67)] text-[40px] pt-16 flex items-center justify-center font-bold'>
                        Or subscribe to the newsletter
                    </div>
                    <div className=' text-[rgba(39,35,67,0.49)] flex items-center justify-center gap-2  pb-10'>
                        <input className='text-xl placeholder:text-xs w-[550px] pl-4 pb-1 pt-1 bg-transparent border-[rgb(39,35,67)] border-b-2' type="text" placeholder='Email address...' />
                        <input className='text-xs pb-2  placeholder:text-xs w-[100px] pt-[16px]  bg-transparent border-[rgb(39,35,67)] border-b-2' type="button" value="SUBMIT" />
                    </div>

                        <div className='text-[rgb(39,35,67)] text-[40px] pt-2 pb-6  flex items-center justify-center font-bold'>
                        Follow products and discounts on Instagram
                        </div>

                    <div className='flex items-center justify-center gap-2 pb-9'>
                        <div>
                            <Image src={stool} alt='' height={170} />
                        </div>
                        <div>
                            <Image src={WCC} alt='' height={170} />
                        </div>
                        <div>
                            <Image src={OC} alt='' height={170} />
                        </div>
                        <div>
                            <Image src={PC} alt='' height={170} />
                        </div>
                        <div>
                            <Image src={WS} alt='' height={170} />
                        </div>
                    </div>
                </div>
            </div>



        </main>
    )
}

export default ProductMain