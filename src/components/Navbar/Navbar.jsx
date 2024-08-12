import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ellipsis, X } from 'lucide-react'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
  return (
    <div>
      {/* Desktop nav */}
      <nav className='w-full h-[100px] bg-white lg:flex hidden justify-between items-center px-20'>

         <div className='logo'>
           <img src='/assets/KUKAlogo.svg'/>
         </div>

         <div className='links flex gap-x-14 items-center'>
           <Link to="/" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Home</Link>
           <Link to="/products" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Products</Link>
           <Link to="/customise" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Customise</Link>
           <Link to="/aboutus" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >About Us</Link>
         </div>

         <div className='profile flex gap-x-5 items-center'>
           <Link to="/account"><img src="/assets/account.svg"/></Link>
           <Link to="/cart"><img src="/assets/cart.svg"/></Link>
         </div>

      </nav>
      {/* Desktop nav end*/}

       {/* Mobile nav */}
        <nav className='relative w-full h-fit  bg-white  lg:hidden  '>
          
         <div className='w-full py-5 flex justify-between items-center'>
         <div className='logo w-[140px] pl-5 '>
           <img src='/assets/KUKAlogo.svg' className='w-full'/>
          </div>

          <div className='pr-5'>
          {!openNav && <Ellipsis color='#25304C' onClick={()=>setOpenNav(!openNav)}/>} 
          {openNav && <X color='#25304C' onClick={()=>setOpenNav(!openNav)}/>} 
          </div>

         </div>
          
          {openNav && 
          <div className='absolute z-50 w-full flex flex-col gap-y-6 items-center justify-center bg-white/60 backdrop-blur h-fit py-10  '>
           <Link to="/" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Home</Link>
           <Link to="/products" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Products</Link>
           <Link to="/customise" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >Customise</Link>
           <Link to="/aboutus" className='text-[18px] font-poppins font-medium text-[#5F5F5F] ' >About Us</Link>
           <Link to="/account"><img src="/assets/account.svg"/></Link>
           <Link to="/cart"><img src="/assets/cart.svg"/></Link>
          </div>}

        </nav>
      
       {/* Mobile nav end*/}

      

    </div>
  )
}

export default Navbar
