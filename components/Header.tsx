import React from 'react'
import Image from 'next/image'
import alert from "../public/alert.png"
import tic from "../public/tic.png"
import two from "../public/2.png"
import cart from "../public/image.png"
import logo from "../public/logo.png"


function Header() {
    return (
        <main>

            <div className='bg-[rgb(39,35,67)] flex justify-around items-center  text-[14px]  pt-[14px] pb-[14px]'>
                <div className='flex items-center gap-[18px] opacity-70'>
                    <select className='bg-[rgb(39,35,67)]  border-none decoration-none'>
                        <option value="">Eng</option>
                    </select>
                    <p>Faqs</p>
                    <p className='flex items-center'><span className='pr-1'><Image src={alert} alt='img' width={18} /></span>Need Help</p>
                </div>
                <div>
                    <p className='opacity-70 flex items-center'><span className='pr-1'><Image src={tic} alt='img' width={18} /></span>Free shipping on all orders over $50</p>
                    
                </div>
                
            </div>



            <div className='bg-[rgb(240,242,243)] h-[84px] flex justify-around items-center gap-44 text-[rgb(39,35,67)] '>
          
                <div className=''>
                <div className=' flex gap-1 items-center text-[30px] font-semi-bold'><span className='flex  items-center'><Image  src={logo} alt='img' width={40}/></span>Comforty</div>
                </div>
                <div>
             <div className='flex bg-white  h-[44px] w-[120px] justify-center gap-1 items-center rounded-md'>
                <p className='text-[6px]'><span className='flex items-center  bg-white'><Image src={cart} alt='img' width={22}/></span></p>
                <p className='text-[6px]'>Cart</p>
             <span className='flex items-center pt-2'><Image  src={two} alt='img' width={30}/></span>
                </div>
                </div>
         
            </div>

            <div className=' h-[74px]  flex items-center justify-around' >
                <div className=' text-[rgb(99,98,112)] text-[14px] flex '>
                    <ul className=' decoration-0 flex gap-5 ' >
                        <li className='text-[rgb(0,117,128)]'>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                        <li>Pages</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='h-[74px] flex text-[rgb(99,98,112)] text-[14px] '>
                    <p className='flex gap-2 items-center'>Contact:<span className='text-[rgb(39,35,67)] '> (808) 555-111</span></p>
                </div>

            </div>
<hr />
        </main>
    )
}

export default Header