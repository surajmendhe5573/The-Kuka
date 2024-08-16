import React from 'react'
import {MoveRight} from "lucide-react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const ProductSections = () => {
  useEffect(()=>{
    AOS.init({duration:3000});
  }, []);

    const boxes=[
        {
            img: "/assets/spiceBox.png",
            name: "Wooden Spice Box",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/dryFruitBox.png",
            name: "Wooden Dry Fruits Box",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/hexagonBox.png",
            name: "Dry Fruits Box Hexagonal",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
    ]

    const trays=[
        {
            img: "/assets/rectangleTray.png",
            name: "Serving Tray Ractangle",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/squareTray.png",
            name: "Serving Tray Square",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/roundTray.png",
            name: "Serving Tray Round",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
    ]

    const mugs=[
        {
            img: "/assets/beerMug.png",
            name: "Beer Mug",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/cup.png",
            name: "Tea Mug",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
        {
            img: "/assets/teacup.png",
            name: "Coffee Mug",
            desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit."
        },
    ]

  return (
    <div className='bg-white w-full flex flex-col justify-center items-center mt-10 lg:px-20'>
        {/* Wooden boxes */}
      <section className='woodenBoxes w-full mb-10 lg:mb-16'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[30px] font-normal font-bangla text-[#25304C] '>Wooden Boxes</h1>
          <img src="/assets/design.svg" />
        </div>
        <div className='w-full mt-12 flex justify-center items-center lg:flex-row flex-col gap-y-8 gap-x-6 '>
           {boxes.map((box,index)=>{
            return(
             <div className='card lg:w-[40%] md:w-[70%] w-[90%] h-[420px] rounded-[4px]  '>
               <img src={box.img} alt={box.name} className='w-full h-[70%] object-cover rounded-[4px]' />
               <p className='lg:text-[30px] text-[24px] font-normal font-bangla text-[rgba(16,16,16,1)] mt-5 '>{box.name}</p>
               <p className='text-[16px] font-poppins font-normal text-[rgba(103,121,165,1)] '>{box.desc}</p>
             </div>
            )
           })} 
        </div>       
      </section>
        {/* Wooden boxes end*/}

         {/* Wooden tray */}
      <section className='woodenBoxes w-full mb-10 lg:mb-16'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[30px] font-normal font-bangla text-[#25304C] '>Wooden Tray</h1>
          <img src="/assets/design.svg"/>
        </div>
        <div className='w-full mt-12 flex justify-center items-center lg:flex-row flex-col gap-y-8 gap-x-6 '>
           {trays.map((tray,index)=>{
            return(
             <div className='card lg:w-[40%] md:w-[70%] w-[90%] h-[420px] rounded-[4px]  '>
               <img src={tray.img} alt={tray.name} className='w-full h-[70%] object-cover rounded-[4px] ' />
               <p className='lg:text-[30px] text-[24px] font-normal font-bangla text-[rgba(16,16,16,1)] mt-5 '>{tray.name}</p>
               <p className='text-[16px] font-poppins font-normal text-[rgba(103,121,165,1)] '>{tray.desc}</p>
             </div>
            )
           })} 
        </div>       
      </section>
        {/* Wooden tray end*/}

         {/* Wooden mugs */}
      <section className='woodenBoxes w-full mb-10 lg:mb-16'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[30px] font-normal font-bangla text-[#25304C] '>Wooden Mugs</h1>
          <img src="/assets/design.svg"/>
        </div>
        <div className='w-full mt-12 flex justify-center items-center lg:flex-row flex-col gap-y-8 gap-x-6 '>
           {mugs.map((mug,index)=>{
            return(
             <div className='card lg:w-[40%] md:w-[70%] w-[90%] h-[420px] rounded-[4px]  '>
               <img src={mug.img} alt={mug.name} className='w-full h-[70%] object-cover rounded-[4px]' />
               <p className='lg:text-[30px] text-[24px] font-normal font-bangla text-[rgba(16,16,16,1)] mt-5 '>{mug.name}</p>
               <p className='text-[16px] font-poppins font-normal text-[rgba(103,121,165,1)] '>{mug.desc}</p>
             </div>
            )
           })} 
        </div>       
      </section>
        {/* Wooden mugs end*/}

        {/*Other Products */}
      <section className='woodenBoxes w-full mb-10'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[30px] font-normal font-bangla text-[#25304C] '>Other Products</h1>
          <img src="/assets/design.svg"/>
        </div>

        {/* Desktop */}
        <div className='mt-12 w-full lg:flex hidden gap-x-5 h-[626px] '>
           <div className='w-[50%] h-full relative z-40 group '>
             <div className='overlay absolute  opacity-0 group-hover:opacity-100 flex flex-col items-center  bg-black/40 w-full h-full top-0 bottom-0 left-0 right-0 transition-all duration-1000'  >
               <p className='text-[40px] pt-20 font-bangla font-normal text-white opacity-0 transition-all duration-1000 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0 '>Wooden Cake Stand</p>
               <div className='w-[50%] h-[60px] absolute bottom-20  rounded-full  bg-white text-[#101010] flex justify-center items-center font-poppins font-medium text-[26px] opacity-0 transition-all duration-1000 ease-in-out transform translate-y-0 group-hover:opacity-100 group-hover:translate-y-[-100%]'>
                 View Product
               </div>
             </div>
             <img src="/assets/large.png" className='w-full h-full object-cover '/>
           </div>

           <div className='w-[50%] h-full flex flex-col gap-y-5  '>

             <div className='w-full h-[48.40%] flex gap-x-5 '>
                <div className='w-[50%] h-full bg-white '>
                 <img src="/assets/one.png" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[50%] h-full bg-white '>
                 <img src="/assets/two.png" className='w-full h-full object-cover'/>
                </div>
             </div>

             <div className='w-full h-[48.40%] flex gap-x-5 '>
                <div className='w-[50%] h-full bg-white '>
                 <img src="/assets/three.png" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[50%] h-full bg-white '>
                 <img src="/assets/four.png" className='w-full h-full object-cover'/>
                </div>
             </div>

           </div>
        </div>

        {/* Mobile */}
        <div className='mt-12 w-full lg:hidden flex flex-col gap-y-4 items-center  h-[626px] '>

          <div className='md:w-[70%] w-[90%] flex gap-x-4  h-[25%] '>
           
            <div className='w-[50%] h-full bg-white '>
              <img src="/assets/one.png" className='w-full h-full object-cover'/>
            </div>

            <div className='w-[50%] h-full bg-white '>
             <img src="/assets/two.png" className='w-full h-full object-cover'/>
            </div>
          
          </div>

          <div className='md:w-[70%] w-[90%] bg-white h-[50%] '>
            <img src="/assets/large.png" className='w-full h-full object-cover '/>
          </div>

          <div className='md:w-[70%] w-[90%] flex gap-x-4  h-[25%] '>
           
            <div className='w-[50%] h-full bg-white '>
              <img src="/assets/three.png" className='w-full h-full object-cover'/>
            </div>

            <div className='w-[50%] h-full bg-white '>
             <img src="/assets/four.png" className='w-full h-full object-cover'/>
            </div>
          
          </div>

        </div>

        <div className='flex justify-center items-center  mt-16'>
           <div className='md:w-[323px]  md:h-[60px] w-[70%] h-[50px] bg-[rgba(0,0,0,1)] gap-x-4 text-white md:text-[26px] text-[22px] font-medium font-poppins flex justify-center items-center rounded-full '>
              View More <MoveRight size={30} />
           </div>
        </div>

         
      </section>
        {/* Other Products end*/}

    </div>
  )
}

export default ProductSections
