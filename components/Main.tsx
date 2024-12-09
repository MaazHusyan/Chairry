import React from 'react'
import Image from 'next/image'
import hero from '../public/hero.png'
import brand from '../public/brands.png'
import shop from '../public/shopN.png'
import WC from '../public/whiteC.png'
import PC from '../public/pinkC.png'
import OC from '../public/orangC.png'
import WS from '../public/whiteS.png'
import NB from '../public/NB.png'
import sales from '../public/BN2.png'
import wing from '../public/wingC.png'
import wood from '../public/woodenC.png'
import desk from '../public/deskC.png'
import grid from '../public/gridI.png'
import blueC from '../public/blueC.png'
import whiteC from '../public/cart2.png'



function Main() {
  return (
    <main>
      
      {/* first Image */}

      <div className='flex items-center justify-center'>
        <div className='h-[592px] w-[920px] '>
          <Image className=' absolute bottom-[13px] left-[264px]' src={shop} alt='img' width={119} height={52} />
          <Image src={hero} alt='img' />
        </div>
      </div>
      <div>
        <div className=' flex items-center justify-center'>
          <div className='h-[100px] w-[920px] '>
            <Image src={brand} alt='img' />
          </div>
        </div>
      </div>



      <div className='text-[rgb(39,35,67)] ml-[218px] font-semibold pt-4 pb-4 '>
        <h4> Featured Products</h4>
      </div>
      <div className='flex items-center justify-center'>
        <div>
          <div className='w-[220px] h-[220px] '>
            <Image src={WC} alt="img" width={220} />
            <Image className=' absolute top-[988px] left-[230px] ' src={NB} alt='img' width={27} />
          </div>
          <div className=''>
            <p className='text-[rgb(0,117,128)] text-xs pt-2'>Library Stool Chair</p>
            <p className='text-[rgb(39,35,67)] text-sm pt-1 pb-2 font-medium'>$20</p>
          </div>
        </div>
        <div className='pl-3'>
          <div className='w-[220px] h-[220px] '>
            <Image src={PC} alt="img" width={220} />
            <Image className=' absolute top-[988px] left-[465px] ' src={sales} alt='img' width={27} />
          </div>
          <div className=''>
            <p className='text-[rgb(39,35,67)] text-xs pt-2'>Library Stool Chair</p>
            <p className='text-[rgb(39,35,67)] text-sm pt-1 pb-2 font-medium'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span></p>
          </div>
        </div>
        <div className='pl-3'>
          <div className='w-[220px] h-[220px] '>
            <Image src={OC} alt="img" width={220} />
            <Image className=' absolute top-[988px] left-[705px] ' src={NB} alt='img' width={27} />
          </div>

          <div className=''>
            <p className='text-[rgb(39,35,67)] text-xs pt-2'>Library Stool Chair</p>
            <p className='text-[rgb(39,35,67)] text-sm pt-1 pb-2 font-medium'>$20</p>
          </div>
        </div>
        <div className='pl-3'>
          <div className='w-[220px] h-[220px] '>
            <Image src={WS} alt="img" width={220} />
            <Image className=' absolute top-[988px] left-[937px] ' src={NB} alt='img' width={27} />
          </div>
          <div className=''>
            <p className='text-[rgb(39,35,67)] text-xs pt-2'>Library Stool Chair</p>
            <p className='text-[rgb(39,35,67)] text-sm pt-1 pb-2 font-medium'>$20</p>
          </div>
        </div>
      </div>
      <div>

        <div className='text-[rgb(39,35,67)]  ml-[218px] font-semibold pt-[100px] pb-4 '>
          <h4>Top Catagories</h4>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <div className=''>
            <Image className='' src={wing} alt='img' width={295} />
          </div>
          <div>
            <Image className='' src={wood} alt='img' width={295} />
          </div>
          <div>
            <Image className='' src={desk} alt='img' width={295} />
          </div>
        </div>

      </div>

      <div className='flex items-center justify-center mt-28 mb-20'>
        <div>
          <Image src={grid} alt='img' width={930}/>
        </div>
      </div>

      <div className='text-[rgb(39,35,67)] flex items-center justify-center  font-semibold pt-4 pb-8 '>
        <h4>Our Products</h4>
      </div>

      <div className='flex items-center justify-center pl-6 gap-1 pb-5'>
       <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={WC} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(0,117,128)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20</span></p>
          <Image src={blueC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={WS} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span> </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={PC} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={OC} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>
      </div>
      <div className='flex items-center justify-center pl-6 gap-1 pb-40 '>
      <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={WS} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={WS} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 <span className='text-[rgba(39,35,67,0.61)]  pt-1 pb-2 font-medium  line-through text-xs '>$30</span>  </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={PC} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>

        <div className='flex items-center justify-center gap-2'>
       <div>
          <Image src={OC} alt='img' width={220}/>
          <div className='flex items-center gap-10 justify-around'>
          <p className=' text-[rgb(39,35,67)] text-xs pt-[5px] '>Library Stool Chair <br /><span className='text-[rgb(39,35,67)] text-xs pt-2'>$20 </span></p>
          <Image src={whiteC} alt='img' width={28}/>
          </div>
        </div>
       
        </div>
      </div>
    </main>
  )
}

export default Main