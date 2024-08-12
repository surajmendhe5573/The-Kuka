import React, {useState} from 'react'

const Customers = () => {
    const data = [
        {
            date: "15/07/2024",
            name: "Kuka",
            email: "abcd2@gmail.com",
            num: 9999999999,
            total: "₹22,000",
            items: "2 Spice Boxes"
        },
        {
            date: "16/07/2024",
            name: "The Kuka",
            email: "abcd2@gmail.com",
            num: 9999999999,
            total: "₹22,000",
            items: "1 Spice Boxes"
        },
        {
            date: "15/07/2024",
            name: "Kuka",
            email: "abcd2@gmail.com",
            num: 9999999999,
            total: "₹22,000",
            items: "2 Spice Boxes"
        },
    ]

    const [search, setSearch] = useState("");

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.email.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.date.toString().toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className='w-full bg-white rounded-[9px] mt-2 p-3.5 '>

    <div className='w-full flex xl:flex-row xl:flex-wrap flex-col gap-y-5  xl:justify-between xl:items-center '>
       <p className='text-[#25304C] font-semibold text-[18px] '>Customisation Inquiries</p>

       <div className='flex md:flex-row flex-col gap-x-5 gap-y-5 '>
        <div className='w-[170px] h-[45px] cursor-pointer rounded-[6px] bg-[#25304C] flex justify-center items-center '>
           <p className='text-white font-medium text-[16px] font-euclid '>Download Excel</p>
        </div>


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

    <div className='w-full overflow-x-auto'>
        <table className=' min-w-[300px] w-full mt-5'>
            <thead>
                <tr className='bg-[#25304C] h-[45px] '>
                    <th className='text-[16px] text-white font-semibold rounded-tl-[10px]'>Date</th>
                    <th className='text-[16px] text-white font-semibold '>Name</th>
                    <th className='text-[16px] text-white font-semibold '>Email id</th>
                    <th className='text-[16px] text-white font-semibold '>Mobile no.</th>
                    <th className='text-[16px] text-white font-semibold '>Total Order</th>
                    <th className='text-[16px] text-white font-semibold rounded-tr-[10px]'>Items</th>
                </tr>
            </thead>

            <tbody>
                {filteredItems.map((item, index)=>{
                  return(
                    <tr className='border border-[3eaeaeb] '>
                        <td className='border border-[3eaeaeb] h-10 '>
                            <p className='text-[15px] font-medium text-[#211F3B] text-center'>{item.date}</p>
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
                        <td className='border border-[3eaeaeb] h-10'>
                            <p className='text-[15px] font-medium text-[#211F3B] pl-2 '>{item.total}</p>
                        </td>
                        <td className='border border-[3eaeaeb] h-10'>
                            <p className='text-[15px] font-medium text-[#211F3B] pl-2 '>{item.items}</p>
                        </td>

                    </tr>
                  )
                })}
                

            </tbody>

        </table>

    </div>

  </div>
  )
}

export default Customers
