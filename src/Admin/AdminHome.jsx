import React, {useState} from 'react'
import { MoveDown, MoveRight } from 'lucide-react'

const AdminHome = () => {

    const data = [
        {
            name: "Kuka",
            email: "abcd2@gmail.com",
            num: 9999999999
        },
        {
            name: "The Kuka",
            email: "abcd3@gmail.com",
            num: 9999999999
        },
        {
            name: "Kuka",
            email: "abcd2@gmail.com",
            num: 9999999999
        },
    ]

    const [search, setSearch] = useState("");

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.email.toString().toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className='font-workSans py-3 px-1'>
      <div className='flex w-full gap-2.5 flex-row flex-wrap '>

         <div className='bg-white h-[123px] rounded-[9px] w-fit pr-20 flex flex-col  justify-center  '>
            <p className='font-semibold md:text-[18px] text-[16px] text-black ml-3.5 mt-2 '>Current Viewers</p>
            <div className='flex  ml-3.5 gap-x-3 mt-3'>
              <img src="/assets/Eye.svg"/>
              <p className='md:text-[48px] text-[32px] font-semibold text-[#00B612]  '>354</p>
            </div>
         </div>

         <div className='bg-white h-[123px] rounded-[9px] w-fit pr-20 flex flex-col  justify-center  '>
            <p className='font-semibold md:text-[18px] text-[16px] text-black  ml-3.5 mt-2 '>Total Customers</p>
            <div className='flex  ml-3.5 gap-x-3 mt-3'>
              <p className='md:text-[48px] text-[32px] font-semibold text-[#00B612]  '>354565</p>
            </div>
         </div>

         <div className='bg-white h-[123px] rounded-[9px] w-fit pr-20 flex flex-col  justify-center  '>
            <p className='font-semibold md:text-[18px] text-[16px] text-black ml-3.5 mt-2 '>Repeat Customers</p>
            <div className='flex  ml-3.5 gap-x-3 mt-3 items-center'>
              <p className='md:text-[48px] text-[32px] font-semibold text-[#FF4242]  '>3545</p>
              <div className='flex '>
              <MoveDown color="#FF4242" /> 
              <p className='text-[#ff4242] md:text-[18px] text-[16px] font-semibold '>10%</p>
              </div>
            </div>
         </div>

         <div className='bg-white h-[123px] rounded-[9px] w-fit gap-x-3 flex items-center  '>
            <div>
            <p className='font-semibold md:text-[18px] text-[16px] text-black ml-3.5 mt-2 '>Total Orders</p>
            <div className='flex  ml-3.5 gap-x-3 mt-3 items-center'>
              <p className='md:text-[48px] text-[32px] font-semibold text-[#FF4242]  '>3545</p>
              <div className='flex '>
              <MoveDown color="#FF4242" /> 
              <p className='text-[#ff4242] md:text-[18px] text-[16px] font-semibold '>10%</p>
              </div>
            </div>
            </div>

            <div>
            <p className='font-semibold md:text-[18px] text-[16px] text-[#6779A5] mx-3.5 mt-2 '>Last Month</p>
            <div className='flex  mx-3.5 gap-x-3 mt-3 items-center'>
              <p className='md:text-[48px] text-[32px] font-semibold text-[#00B612]  '>3899</p>
            </div>
            </div>
            
         </div>

      </div>

      <div className='w-full bg-white h-fit rounded-[9px] mt-2 p-3.5'>
        <div className='w-full flex md:flex-row flex-col md:justify-between gap-y-4  '>
           <p className='text-[#25304C] font-semibold text-[24px] '>Total Sales</p>
           <div className='flex flex-row gap-4 items-center  '>
              <div className='md:w-[170px] w-[40%] h-[45px] rounded-[6px] bg-[#EAEDF3] flex justify-center items-center gap-x-2 md:gap-x-4 '>
                <img src="/assets/Calendar.svg"/>
                <p className='text-[#25304C] font-medium text-[16px] font-euclid '>01/07/2024</p>
              </div>

              <p className='text-[#25304C] font-medium text-[18px] font-euclid '>to</p>

              <div className='md:w-[170px] w-[40%] h-[45px] rounded-[6px] bg-[#EAEDF3] flex justify-center items-center gap-x-2 md:gap-x-4'>
                <img src="/assets/Calendar.svg"/>
                <p className='text-[#25304C] font-medium text-[16px] font-euclid '>01/07/2024</p>
              </div>
           </div>
        </div>

        <div className='flex xl:flex-row flex-col gap-y-4 xl:justify-between mt-5'>
            <div className='flex flex-row flex-wrap gap-x-20 gap-y-4 '>
               <div>
                 <p className='text-[#6779A5] font-semibold text-[18px] '>Total Sales</p>
                 <p className='text-[#00B612] font-semibold text-[34px] mt-1.5 '>₹ 3,29,994</p>
               </div>

               <div>
                 <p className='text-[#6779A5] font-semibold text-[18px] '>Total Orders</p>
                 <p className='text-[#00B612] font-semibold text-[34px] mt-1.5 '>7689</p>
               </div>

               <div>
                 <p className='text-[#6779A5] font-semibold text-[18px] '>Average Order Value</p>
                 <p className='text-[#00B612] font-semibold text-[34px] mt-1.5 '>₹ 12,999</p>
               </div>
            
            </div>

             <div className='flex gap-x-2 xl:mt-14 '>
               <p className='text-[#25304C] font-semibold text-[18px] font-euclid '>View in Detail </p>
               <MoveRight color="#25304C" />
             </div>

        </div>
      </div>

      <div className='w-full bg-white rounded-[9px] mt-2 p-3.5 '>

        <div className='w-full flex xl:flex-row flex-col gap-y-5  xl:justify-between xl:items-center '>
           <p className='text-[#25304C] font-semibold text-[18px] '>Customisation Inquiries</p>

           <div className='flex md:flex-row flex-col gap-x-10 gap-y-5 '>
            <div className='flex flex-row gap-4 items-center  '>
              <div className='md:w-[170px] w-[40%] h-[45px] rounded-[6px] bg-[#EAEDF3] flex justify-center items-center gap-x-2 md:gap-x-4 '>
                <img src="/assets/Calendar.svg"/>
                <p className='text-[#25304C] font-medium text-[16px] font-euclid '>01/07/2024</p>
              </div>

              <p className='text-[#25304C] font-medium text-[18px] font-euclid '>to</p>

              <div className='md:w-[170px] w-[40%] h-[45px] rounded-[6px] bg-[#EAEDF3] flex justify-center items-center gap-x-2 md:gap-x-4'>
                <img src="/assets/Calendar.svg"/>
                <p className='text-[#25304C] font-medium text-[16px] font-euclid '>01/07/2024</p>
              </div>
            </div>

            <div className='md:w-[270px] w-[95%] rounded-[6px] bg-[#EAEDF3] h-[45px] relative  '>
                <input placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} className='placeholder:text-[16px] w-[80%] h-full bg-transparent px-3 placeholder:text-[#211F3B] placeholder:font-inter placeholder:font-medium ' />
                <img src="/assets/Icon.svg" className='absolute top-3.5 right-3 '/>
            </div>
           </div>

        </div>

        <div className='w-full overflow-x-auto '>
            <table className=' min-w-[300px] w-full  mt-5'>
                <thead>
                    <tr className='bg-[#25304C] h-[45px] '>
                        <th className='text-[16px] text-white font-semibold '>Sr.no</th>
                        <th className='text-[16px] text-white font-semibold '>Name</th>
                        <th className='text-[16px] text-white font-semibold '>Email id</th>
                        <th className='text-[16px] text-white font-semibold '>Mobile no.</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredItems.map((item, index)=>{
                      return(
                        <tr className='border border-[3eaeaeb] '>
                            <td className='border border-[3eaeaeb] h-10 '>
                                <p className='text-[15px] font-medium text-[#211F3B] text-center'>{index+1}</p>
                            </td>
                            <td className='border border-[3eaeaeb] h-10'>
                                <p className='text-[15px] font-medium text-[#211F3B] pl-4'>{item.name}</p>
                            </td>
                            <td className='border border-[3eaeaeb] h-10'>
                                <p className='text-[15px] font-medium text-[#211F3B] pl-2'>{item.email}</p>
                            </td>
                            <td className='border border-[3eaeaeb] h-10'>
                                <p className='text-[15px] font-medium text-[#211F3B] pl-2 '>{item.num}</p>
                            </td>

                        </tr>
                      )
                    })}
                    

                </tbody>

            </table>

        </div>

      </div>
    </div>
  )
}

export default AdminHome
