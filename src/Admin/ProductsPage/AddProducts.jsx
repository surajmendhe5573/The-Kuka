import React, { useState } from 'react'
import { X } from 'lucide-react'

const AddProducts = () => {
    const [formData, setFormData] = useState({name: "", category: "", code: "", smallDesc: "", detailedDesc: "", size: "", type: "", finish: "", img1: "", img2: "", img3: "", img4: "", price: ""})
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)

    const [openVariant, setOpenVariant] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
      };
  
    const handleImageUpload1 = (e) =>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage1(imageUrl);
        }
    }

    const handleImageUpload2 = (e) =>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage2(imageUrl);
        }
    }
    const handleImageUpload3 = (e) =>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage3(imageUrl);
        }
    }
    const handleImageUpload4 = (e) =>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage4(imageUrl);
        }
    }

    const img ="/assets/Image.png"


    return (
    <div className='relative w-full bg-white font-workSans  '>
        <form className='w-full flex flex-col md:gap-y-8  gap-y-4 '>
        {openVariant && 
          <div className='absolute flex justify-center items-center  w-full h-full z-50 '>
             <div className=' md:w-[590px] md:h-[292px] w-[90%] h-fit drop-shadow-2xl  rounded-[10px] bg-white  '>
                <div className='flex justify-between pl-20 pr-2 '>
                  <p className='font-semibold text-[24px] text-[#25304C] mt-7'>Create Variant</p>
                  <X onClick={()=>setOpenVariant(false)} color="#AEAEB2" className='mt-4 cursor-pointer ' />
                </div>
               
                <div className='flex flex-col items-center justify-center mt-5 gap-y-3.5 '>
                   <input type='text' name='variant' placeholder='Variant Name' className='md:w-[444px] w-[90%]  h-[50px] rounded-[10px] px-4 bg-[#EAEAEB80] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#535353] '/>
                   <button className='md:w-[444px] mt-2 w-[90%] h-[50px] rounded-[10px] bg-[#25304C] text-white text-[20px] font-semibold '>Create</button>
                   <button onClick={()=>setOpenVariant(false)} className='md:w-[444px] w-[90%] h-[50px] rounded-[10px] bg-transparent text-[#25304C] text-[18px] font-semibold '>Cancel</button>
                </div>
            
            </div>
            </div>}
            <div className='flex w-full md:flex-row gap-4 flex-col items-center md:items-start '>
                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Name</label>
                    <input type='text' name='name' onChange={handleChange} value={formData.name} placeholder='Enter Product Name' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>

                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Category</label>
                    <input type='text' name='category' onChange={handleChange} value={formData.category} placeholder='Enter Product Category' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>

                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Code</label>
                    <input type='text' name='code' onChange={handleChange} value={formData.code} placeholder='Enter Product Code' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>
            </div>

            <div className='flex w-full md:flex-row gap-4 flex-col items-center md:items-start'>
                <div className='md:w-[32.5%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Small Description for overview</label>
                    <textarea type='text' name='smallDesc' onChange={handleChange} value={formData.smallDesc} placeholder='Enter Small Description Of Product' className='inputField w-full h-[160px]  bg-[#EAEDF3] px-6 py-3' />
                </div>

                <div className='md:w-[67.5%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Detailed Description of Product</label>
                    <textarea type='text' name='detailedDesc' onChange={handleChange} value={formData.detailedDesc} placeholder='Enter Detailed Description Of Product' className='inputField w-full h-[160px] bg-[#EAEDF3] px-6 py-3' />
                </div>

            </div>

            <div className='flex w-full md:flex-row gap-4 flex-col items-center md:items-start '>
                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Size</label>
                    <input type='text' name='size' onChange={handleChange} value={formData.size} placeholder='Enter Product Size' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>

                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Wood Type</label>
                    <input type='text' name='type' onChange={handleChange} value={formData.type} placeholder='Enter Product Wood Type' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>

                <div className='md:w-[50%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Finish type ( Ex. GLOSSY FINISH )</label>
                    <input type='text' name='finish' onChange={handleChange} value={formData.finish} placeholder='Enter Product Finish Type' className='inputField w-full h-[45px] bg-[#EAEDF3] px-6' />
                </div>
            </div>

            <div className='flex flex-col gap-y-2 '>
             <label className='font-semibold text-[#25304C] text-[14px] '>Product Images</label>
             <div className='flex w-full md:flex-row md:flex-wrap flex-col gap-4 items-center md:items-start '>
                <div className='md:w-[226px] w-[90%] flex flex-col justify-center  items-center h-[176px] bg-[#EAEDF3] rounded-[10px] '>
                    <img src={image1 || img} className='w-[55px] h-[55px] object-contain ' />
                    <p className='font-normal text-[12px] font-euclid text-[#211F3B] mt-1 '>Upload Product Image</p>
                    <input id='img1' type='file' name='img1' onChange={handleImageUpload1}  style={{ display: "none" }} />
                    <label htmlFor='img1' className='font-semibold text-[16px] font-euclid text-[#211F3B] mt-2 cursor-pointer '>Upload</label>
                </div>

                <div className='md:w-[226px] w-[90%] flex flex-col justify-center  items-center h-[176px] bg-[#EAEDF3] rounded-[10px] '>
                    <img src={image2 || img} className='w-[55px] h-[55px] object-contain ' />
                    <p className='font-normal text-[12px] font-euclid text-[#211F3B] mt-1 '>Upload Product Image</p>
                    <input id='img2' type='file' name='img2' onChange={handleImageUpload2}  style={{ display: "none" }} />
                    <label htmlFor='img2' className='font-semibold text-[16px] font-euclid text-[#211F3B] mt-2 cursor-pointer '>Upload</label>
                </div>

                <div className='md:w-[226px] w-[90%] flex flex-col justify-center  items-center h-[176px] bg-[#EAEDF3] rounded-[10px] '>
                    <img src={image3 || img} className='w-[55px] h-[55px] object-contain ' />
                    <p className='font-normal text-[12px] font-euclid text-[#211F3B] mt-1 '>Upload Product Image</p>
                    <input id='img3' type='file' name='img3' onChange={handleImageUpload3}  style={{ display: "none" }} />
                    <label htmlFor='img3' className='font-semibold text-[16px] font-euclid text-[#211F3B] mt-2 cursor-pointer '>Upload</label>
                </div>

                <div className='md:w-[226px] w-[90%] flex flex-col justify-center  items-center h-[176px] bg-[#EAEDF3] rounded-[10px] '>
                    <img src={image4 || img} className='w-[55px] h-[55px] object-contain ' />
                    <p className='font-normal text-[12px] font-euclid text-[#211F3B] mt-1 '>Upload Product Image</p>
                    <input id='img4' type='file' name='img4' onChange={handleImageUpload4}  style={{ display: "none" }} />
                    <label htmlFor='img4' className='font-semibold text-[16px] font-euclid text-[#211F3B] mt-2 cursor-pointer '>Upload</label>
                </div>
             </div>

            </div>

            <div className='flex w-full md:flex-row gap-4 flex-col items-center'>
                <div className='md:w-[32.5%] w-[90%] flex flex-col gap-y-2'>
                    <label className='font-semibold text-[#25304C] text-[14px] '>Product Price</label>
                    <input type='number' name='price' onChange={handleChange} value={formData.price} placeholder='Enter Product Price' className='inputField w-full h-[45px]  bg-[#EAEDF3] px-6 ' />
                </div>

                <div onClick={()=>setOpenVariant(true)} className='w-[90%] cursor-pointer md:w-[216px] h-[45px] flex justify-center items-center rounded-[10px] bg-[#25304C] md:mt-7 md:ml-2 text-white text-[16px] font-semibold '>Create Variant</div>
                <button className='w-[90%] md:w-[216px] h-[45px] rounded-[10px] bg-[#25304C] md:mt-7 md:-ml-1.5 text-white text-[16px] font-semibold '>Show Variant</button>
            </div>

            <div className=' w-full flex flex-row  xl:justify-end justify-center gap-x-5 '>
              <button className='w-[50%] md:w-[216px] h-[45px] rounded-[10px] bg-white md:mt-7 md:ml-2 text-[#25304c] text-[16px] border border-[#25304c] font-semibold '>Cancel</button>
              <button className='w-[50%] md:w-[216px] h-[45px] rounded-[10px] bg-[#25304C] md:mt-7 md:-ml-1.5 text-white text-[16px] font-semibold '>Add Product</button>
            </div>

        </form>
      
    </div>
  )
}

export default AddProducts
