import React, { useState } from 'react'
import AdminHome from './AdminHome'

const MainPage = () => {
    const [active, setActive] = useState("Home")
  return (
    <div className='w-full h-full flex justify-center xl:justify-start bg-[#F9F9F9] font-workSans '>
       <div className='sideBar xl:w-[20%] w-[90%] md:w-[80%] xl:flex flex-col hidden py-6 items-center bg-white h-screen '>
          <img src="/assets/KUKAlogo.svg"/>

          <div className='w-full flex flex-col items-center gap-y-4 mt-44 '>
             <div onClick={()=>setActive("Home")} className={`w-[96%] ${active === "Home" ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold" : "text-black font-normal border-l-transparent "}  h-[50px] cursor-pointer flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}>
                <p className='pl-10 '>Home</p>
             </div>
             <div onClick={()=>setActive("Products")} className={`w-[96%] ${active === "Products" ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold" : "text-black font-normal border-l-transparent "}  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}>
                <p className='pl-10 '>Products</p>
             </div>
             <div onClick={()=>setActive("Slider")} className={`w-[96%] ${active === "Slider" ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold" : "text-black font-normal border-l-transparent "}  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}>
                <p className='pl-10 '>Slider</p>
             </div>
             <div onClick={()=>setActive("Customers")} className={`w-[96%] ${active === "Customers" ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold" : "text-black font-normal border-l-transparent "}  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}>
                <p className='pl-10 '>Customers</p>
             </div>
          </div>
       </div>

       <div className='mainContent xl:w-[80%] w-full '>
        {active === "Home" && <AdminHome/>}

       </div>
      
    </div>
  )
}

export default MainPage
