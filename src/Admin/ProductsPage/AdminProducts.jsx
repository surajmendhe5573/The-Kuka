import React, { useState } from 'react'
import AddProducts from './AddProducts'

const AdminProducts = () => {
    const [toggle, setToggle] = useState("Add Product")
  return (
    <div className='font-workSans w-full  bg-white p-5 rounded-[6px] '>
       <div className='xl:max-w-full max-w-[350px] md:max-w-[650px] mb-10  overflow-x-scroll rounded-[22px] bg-[#F1F1F1] h-[45px] flex justify-between  '>
          <div onClick={()=>setToggle("Add Product")} className={`flex cursor-pointer justify-center items-center ${toggle === "Add Product" ? "font-semibold text-white bg-[#25304C] ": "font-medium text-[#25304C] bg-transparent "}  text-[14px] w-fit h-full bg-[#25304C] rounded-[32px] px-8`}>
             <p>Add Product</p>
          </div>

          <div onClick={()=>setToggle("All Products")} className={`flex cursor-pointer justify-center items-center ${toggle === "All Products" ? "font-semibold text-white bg-[#25304C] ": "font-medium text-[#25304C] bg-transparent "}  text-[14px] w-fit h-full bg-[#25304C] rounded-[32px] px-8`}>
             <p>All Products</p>
          </div>

          <div onClick={()=>setToggle("Home Screen Products")} className={`flex cursor-pointer justify-center items-center ${toggle === "Home Screen Products" ? "font-semibold text-white bg-[#25304C] ": "font-medium text-[#25304C] bg-transparent "}  text-[14px] w-fit h-full bg-[#25304C] rounded-[32px] px-8`}>
             <p>Home Screen Products</p>
          </div>

          <div onClick={()=>setToggle("Product Page Categories")} className={`flex cursor-pointer justify-center items-center ${toggle === "Product Page Categories" ? "font-semibold text-white bg-[#25304C] ": "font-medium text-[#25304C] bg-transparent "}  text-[14px] w-fit h-full bg-[#25304C] rounded-[32px] px-8`}>
             <p>Product Page Categories</p>
          </div>

          <div onClick={()=>setToggle("Removed Products")} className={`flex cursor-pointer justify-center items-center ${toggle === "Removed Products" ? "font-semibold text-white bg-[#25304C] ": "font-medium text-[#25304C] bg-transparent "}  text-[14px] w-fit h-full bg-[#25304C] rounded-[32px] px-8`}>
             <p>Removed Products</p>
          </div>
       </div>

       {toggle === "Add Product" && <AddProducts/>}
    </div>
  )
}

export default AdminProducts
