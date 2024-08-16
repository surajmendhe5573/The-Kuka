import React from 'react'
import Hero from '../Hero/Hero'
import Testimonial from '../Testimonial/Testimonial'
import CustomiseProducts from '../CustomiseProducts/CustomiseProducts'

const AboutUs = () => {
  return (
    <>
      <Hero/>
      <div className='mt-14'>

        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[30px] font-normal font-bangla text-[#25304C] '>About Us</h1>
          <img src="/assets/design.svg" />
        </div>

        <div className='w-full mt-20 xl:gap-x-10  gap-y-10 xl:flex-row flex flex-col '>
            <div className='xl:w-[50%] w-full  flex justify-center'>
              <img src="/assets/hexagonBox.png" className='md:w-[85%] w-[90%]  h-[455px] object-cover ' />
            </div>

            <div className='xl:w-[50%] w-full  flex justify-center'>
              <div className='flex flex-col gap-y-4 md:w-[85%] w-[90%] '>
                <p className='font-poppins text-[18px] text-[#6779A5] font-normal '><b className='font-bold text-[38px] '>Discover</b> the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
                <p className='font-poppins text-[18px] text-[#6779A5] font-normal '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
                <p className='font-poppins text-[18px] text-[#6779A5] font-normal '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>
              
            </div>
        </div>

        <div className='flex justify-center w-full my-14'>
          <img src="/assets/design2.svg" className='w-[90%] md:[85%] xl:w-fit '/>
        </div>

        <div className='w-full flex flex-col items-center xl:mt-20 mt-0 '>
          <p className='text-[#25304C] font-bangla xl:text-[60px] md:text-[44px] text-[36px] font-normal '>Our Journey</p>

          <div className='w-full xl:flex hidden h-fit gap-x-10 mt-20'>

             <div className='w-[50%] flex flex-col items-center gap-y-80   '>
              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[120px] text-start '>1990</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins w-[50%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>

              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[120px] text-start '>2011</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins w-[50%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>
               
             </div>

             <div className='w-[10%] flex justify-center pt-10'>           
                <img src="/assets/Line.svg" className='h-[80%]  '/>
             </div>

             <div className='w-[50%] flex flex-col items-center gap-y-80 pt-80 '>
              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[120px] text-start '>2001</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins w-[50%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>

              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[120px] text-start '>2024</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins w-[50%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>
               
             </div>

          </div>

          <div className='w-full flex flex-col xl:hidden mt-8'>
              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[80px] text-start '>1990</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins md:w-[50%] w-[70%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>
              
              <div className='flex w-full h-[150px] mt-5 justify-center'>
                <img src='/assets/Line.svg' className='w-[3px] h-[100%] object-cover'/>
              </div>

              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[80px] text-start '>2001</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins md:w-[50%] w-[70%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>

              <div className='flex w-full h-[150px] mt-5 justify-center'>
                <img src='/assets/Line.svg' className='w-[3px] h-[100%] object-cover'/>
              </div>

              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[80px] text-start '>2011</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins md:w-[50%] w-[70%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>

              <div className='flex w-full h-[150px] mt-5 justify-center'>
                <img src='/assets/Line.svg' className='w-[3px] h-[100%] object-cover'/>
              </div>

              <div className='flex flex-col items-center'>
               <p className='text-[#EAEDF3] font-poppins font-black text-[80px] text-start '>2024</p>
               <p className='text-[#6779A5] font-normal text-[18px] font-poppins md:w-[50%] w-[70%] '>Discover the exceptional ice bags offered by KAV Imports, crafted from FDA USDA certified resins in a BRCGS certified facility. Engineered for durability, our ice bags guarantee secure containment of heavy ice cubes and various items.</p>
              </div>

          </div>
        </div>

        <div className='flex justify-center w-full xl:my-20 my-14'>
          <img src="/assets/design2.svg" className='w-[90%] md:[85%] xl:w-fit '/>
        </div>

      </div>
      <Testimonial/>
      <CustomiseProducts/>
    </>
  )
}

export default AboutUs
