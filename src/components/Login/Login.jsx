import { X } from 'lucide-react'
import React, { useState } from 'react'

const Login = ({setOpenLogin, openLogin}) => {
    const [formData, setFormData] = useState({email: "", password: ""})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(formData))
        setTimeout(()=>{
            setFormData({email: "", password: ""})
        }, 2000)
    }
  return (
    <div className='relative w-full h-full flex justify-center items-center '>
      <div className='absolute z-50  md:w-[590px] md:h-[523px] rounded-[10px] w-[90%] h-fit pb-8 md:pb-0 top-10  bg-white shadow-2xl '>
          <div className='flex justify-between w-full md:pl-16 pl-5 pr-4 '>
               <p className='text-[#25304C] font-workSans text-[24px] font-semibold pt-8 '>Log In</p>
               <X onClick={()=>setOpenLogin(false)} color='#AEAEB2' className='mt-3 cursor-pointer' />
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col items-center mt-12 '>
           <input placeholder='Email Id' type='email' name='email' onChange={handleChange} value={formData.email} className='md:w-[444px] w-[85%] h-[50px] px-4 rounded-[10px] bg-[#EAEAEB80] placeholder:text-[#535353] outline-none focus:outline-[#25304C] focus:bg-white duration-500 transition-all text-[#25304C] ' />
           <input placeholder='Password' type='password' name='password' onChange={handleChange} value={formData.password} className='md:w-[444px] w-[85%] h-[50px] px-4 mt-8 rounded-[10px] bg-[#EAEAEB80] placeholder:text-[#535353] outline-none focus:outline-[#25304C] focus:bg-white duration-500 transition-all text-[#25304C] ' />
           
           <button className='md:w-[444px] w-[85%] h-[50px] rounded-[6px] bg-[#25304C] text-white font-workSans text-[20px] font-semibold mt-8 ' >Log In</button>
           <p className='text-[18px] font-medium font-poppins text-[#5F5F5F] mt-5 ' >Or</p>
           
          </form>
          <p className='text-[#25304c] font-bold text-[18px] font-poppins md:pl-20 pl-5 ' >Sign up With</p>
          <div className='flex justify-center gap-x-7 mt-8 '>
             <div className='w-[60px] h-[60px] rounded-[6px] bg-[#F4F4F4] flex justify-center items-center '>
                <img src='/assets/Google.svg'/>
             </div>
             <div className='w-[60px] h-[60px] rounded-[6px] bg-[#F4F4F4] flex justify-center items-center '>
                <img src='/assets/facebook.svg'/>
             </div>
          </div>
          
       </div>
    </div>
   
  )
}

export default Login
