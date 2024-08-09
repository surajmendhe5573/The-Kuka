import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
   <>
    <div className='w-full xl:h-[450px] h-fit py-10 xl:py-0 flex xl:flex-row flex-col gap-y-8 xl:justify-between items-center px-20 bg-[rgba(234,237,243,1)] mt-24 '>
      
      <div className='one flex flex-col xl:items-start md:items-center gap-y-10 '>
         <img src="/assets/KUKAlogo.svg" className='xl:w-[445px] xl:h-[114px] w-[280px]  '/>
        <div className='flex xl:flex-col flex-col gap-y-4 md:flex-row'>
         <div className='flex gap-x-4 items-start'>
            <img src="/assets/location.svg" className='mt-2 '/>
            <address className='xl:w-[470px] w-[280px] not-italic leading-[35px] text-[16px] font-normal font-poppins text-[#101010] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, </address>
         </div>
         <div className='flex gap-x-4 items-start'>
            <img src="/assets/mail.svg"  className='mt-0.5 '/>
            <a href='mailto:hassan.ali@gmail.com' className='text-[16px] font-normal font-poppins text-[#101010]'>hassan.ali@gmail.com</a>
         </div>
       </div>
      </div>

      <div className='xl:flex xl:flex-col flex flex-col md:grid md:grid-cols-2 gap-x-5 gap-y-5  '>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Boxes</Link>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Tray</Link>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Mugs</Link>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Cake Stand</Link>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Jewellery Boxes</Link>
         <Link to="/" className='font-semibold font-poppins text-[18px] text-[#101010] '>Wooden Chapati Box</Link>
      </div>

      <div className='flex flex-col items-center '>
      <div className='xl:w-[303px] md:w-[90%] w-[100%] flex flex-wrap gap-x-4 gap-y-4 justify-center '>
         <img src="/assets/visa.svg"/>
         <img src="/assets/mastercard.svg"/>
         <img src="/assets/gpay.svg"/>
         <img src="/assets/maestro.svg"/>
         <img src="/assets/phonepe.svg"/>
         <img src="/assets/paytm.svg"/>
         <img src="/assets/rupay.svg"/>
      </div>
      <p className='text-[18px] font-poppins font-medium text-[#101010] mt-4'>Are Accepted Here</p>
      </div>
    </div>

    <div className='w-full h-fit py-[10px] bg-white md:px-10 px-4 gap-y-4 flex md:flex-row flex-col justify-between items-center '>
       <p className='text-[16px] font-bold font-nunito text-[#101010] '>© 2024 THE KUKA ALL RIGHTS RESERVED</p>
       <div className='flex gap-x-4 '>
          <div className='w-[50px] h-[50px] rounded-full bg-[#101010] hover:rotate-180 transition-all duration-500 flex justify-center items-center '>
           <a href='' target='_blank'><InstagramIcon className='text-white'/></a>
          </div>
          <div className='w-[50px] h-[50px] rounded-full bg-[#101010] hover:rotate-180 transition-all duration-500 flex justify-center items-center '>
           <a href='' target='_blank'><FacebookOutlinedIcon className='text-white'/></a>
          </div>
          <div className='w-[50px] h-[50px] rounded-full bg-[#101010] hover:rotate-180 transition-all duration-500 flex justify-center items-center '>
           <a href='' target='_blank'><GoogleIcon className='text-white'/></a>
          </div>
          <div className='w-[50px] h-[50px] rounded-full bg-[#101010] hover:rotate-180 transition-all duration-500 flex justify-center items-center '>
           <a href='' target='_blank'><InstagramIcon className='text-white'/></a>
          </div>
       </div>
    </div>
  </> 
  )
}

export default Footer
