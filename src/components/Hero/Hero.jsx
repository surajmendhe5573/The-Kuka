import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-full lg:px-20 py-10 h-fit bg-[rgba(107,125,168,0.14)] flex flex-col gap-y-8 justify-center items-center lg:flex-row  lg:justify-between lg:items-center '>
       
       <div className=' '>
          <h1 className='lg:text-[50px] md:text-[38px] text-[28px] font-normal font-bangla text-[#25304C] ' >Wooden Spice Box</h1>
          <p className='lg:text-[25px] md:text-[20px] text-[14px] font-normal font-poppins text-[#25304C] '>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit.</p>
       </div>

       <div className='relative lg:block hidden '>
         <img src="/assets/leavesBG.png" />
         <div className='absolute lg:w-[278px] lg:h-[278px] w-[190px] h-[190px] bg-white flex justify-center items-center lg:top-16 lg:left-16 top-14 left-14 right-0 bottom-0 '>
           <img src="/assets/Vector.png" className='lg:w-[276px] lg:h-[276px] w-[188px] h-[188px] '/>
         </div>
       </div>

       <div className='relative lg:hidden md:w-[50%] z-10 w-[80%] '>
         <img src="/assets/leavesBG.png" />
         <div className='absolute lg:w-[278px] lg:h-[278px] w-[190px] h-[190px] md:w-[230px] md:h-[230px] bg-white flex justify-center items-center md:top-16 md:left-16 top-[58px] left-[58px] right-0 bottom-0 '>
           <img src="/assets/Vector.png" className='lg:w-[276px] lg:h-[276px] w-[188px] h-[188px] md:w-[228px] md:h-[228px] '/>
         </div>
       </div>

    </div>
   
    </>
  )
}

export default Hero
