import React, { useState } from 'react'
import { Plus, Minus, MoveRight, X } from 'lucide-react'
import productsList from '../productList/productsList.json'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Testimonial from '../Testimonial/Testimonial'
import CustomiseProducts from '../CustomiseProducts/CustomiseProducts'

const Cart = () => {
    const initialQty = productsList.reduce((acc, product) => {
        acc[product.id] = 1; // Initialize quantity of each product to 1
        return acc;
    }, {});
    
    const [quantities, setQuantities] = useState(initialQty);
    const [change,setChange] = useState(false)

    const decrease = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1
        }));
    }

    const increase = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    }

    const [codeValue, setCodeValue] = useState(null)
    const [appliedCode, setAppliedCode] = useState(null)
    const [submit,setSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCodeValue({ [name]: value });
        console.log({ [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setAppliedCode(codeValue.code);
        setSubmit(true)
        console.log(codeValue);
        console.log(appliedCode)
      };

     const handleClear = () => {
        setCodeValue(null);
        setAppliedCode(null)
        setSubmit(false);
        console.log(codeValue)
    };

    const [formValues, setFormValues] = useState({fname: "", lname: "", num: "", email: "", add1: "", add2: "", pin: "", city: "", state: ""})
    const [error, setError] = useState(null)
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };

      const handleSubmitForm = (e) => {
        e.preventDefault();
        setError('');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formValues.num.length !== 10) {
            setError("Mobile Number should be 10 digits");
            return;
        }

        if (!emailPattern.test(formValues.email)) {
            setError("Please enter a valid email address");
            return;
        }

        alert(JSON.stringify(formValues, null, 2));
    };

   let slicedProducts = productsList.slice(0,2)
    return (
      <>
       <div className='mt-5 '>
            <div className='flex flex-col justify-center items-center mb-14'>
              {change ? <h1 className='md:text-[30px] text-[26px] font-normal font-bangla text-[#25304C] '>Billing Details</h1> :<h1 className='md:text-[30px] text-[26px] font-normal font-bangla text-[#25304C] '>Your Cart</h1> }
                <img src="/assets/design.svg"/>
            </div>

            <div className='w-full mt-20  gap-x-5 gap-y-10 xl:px-20 md:px-8 px-2 xl:flex-row flex flex-col justify-center items-center xl:items-start'>
                {!change ?  <div className='flex flex-col gap-y-6 xl:w-[65%] md:w-[90%] w-[100%] '>
                {/* ///CART ITEMS/// */}
                {slicedProducts.map((product, index) => (
                    <div key={product.id} className='w-full  h-fit flex'>
                        <img src="/assets/squareTray.png" className='w-[40%] h-[230px] mr-10'/>
                        <div className='w-[60%] flex flex-col'>
                            <p className='text-[22px] font-bangla font-normal text-[#101010] '>Dry Fruits Box hexagonal</p>
                            <p className='font-poppins text-[18px] font-bold text-[#25304C]'>Size : &nbsp;<b className='text-[16px] font-medium font-poppins text-[#6779A5]'>24CMx24CMx7CM</b></p>
                            <p className='font-poppins text-[18px] font-bold text-[#25304C] mt-1'>Wood : &nbsp;<b className='text-[16px] font-medium font-poppins text-[#6779A5]'>Teak Wood</b></p>
                            <p className='font-poppins text-[18px] font-bold text-[#25304C] mt-1'>Finish : &nbsp;<b className='text-[16px] font-medium font-poppins text-[#6779A5]'>Matte Finish</b></p>
                            <div className='flex flex-wrap gap-y-4 items-center mt-2'>
                                <p className='font-bangla text-[22px] font-normal text-[#25304C]'>Price : </p>&nbsp;&nbsp;
                                <p className='text-[22px] font-normal font-bangla text-[#CE916B]'>11,999</p>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className='text-[22px] font-normal font-bangla text-[#6779A5] line-through'>13,999</p>&nbsp;&nbsp;&nbsp;&nbsp;
                               {appliedCode && <div className='flex justify-center items-center w-fit px-3 h-[30px] rounded-[5px] -mt-3 bg-[#00a61148]'>
                                    <li className='text-[#00A611] font-medium font-poppins text-[12px]'>{appliedCode} applied</li>
                                </div>} 
                            </div>
                            <div className='flex mt-2 gap-x-2'>
                                <div onClick={() => decrease(product.id)} className='group w-[33px] h-[33px] border border-[#D1D1D6] flex justify-center hover:bg-[#25304C] transition-all duration-500 text-[#535353] hover:border-transparent hover:text-white items-center rounded-full bg-[#F5F5F5]'>
                                    <RemoveIcon/>
                                </div>
                                <div className='w-[55px] h-[35px] rounded-[3px] border border-[#D1D1D6] flex justify-center items-center'>
                                    <p className='font-workSans font-semibold text-[20px] text-black'>{quantities[product.id]}</p>
                                </div>
                                <div onClick={() => increase(product.id)} className='w-[33px] h-[33px] border border-[#D1D1D6] text-[#535353] flex justify-center hover:text-white hover:bg-[#25304C]   transition-all duration-500 hover:border-transparent items-center rounded-full bg-[#F5F5F5]'>
                                    <AddIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                 {/* ///CART ITEMS end/// */}
                </div> 
                : 
                <form className='formBox xl:w-[65%] md:w-[90%] w-[100%]'>
                   <p className='font-semibold text-[20px] font-poppins text-[#25304C] ml-4 md:ml-0'>Basic Details</p>
                   {/* //FIRST NAME LAST NAME/// */}
                   <div className='flex md:flex-row flex-col gap-y-5 gap-x-5 w-full  mt-7 px-4 md:px-0 '>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>First Name</label>
                         <input type='text' name="fname" onChange={handleForm} value={formValues.fname} placeholder='First Name Here....' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       <div className='flex flex-col md:w-[50%]  w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Last Name</label>
                         <input type='text' name="lname" onChange={handleForm} value={formValues.lname} placeholder='Last Name Here....' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       
                   </div>

                    {/* //Mobile email/// */}
                    <div className='flex md:flex-row flex-col gap-y-5 gap-x-5 w-full  mt-5 px-4 md:px-0 '>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Mobile Number</label>
                         <input type='number' name="num" onChange={handleForm} value={formValues.num} placeholder='Mobile no Here....' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                         {error !== null && error === "Mobile Number should be 10 digits" && <p className='text-red-600 '>{error}</p>}
                       </div>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Email</label>
                         <input type='email' name="email" onChange={handleForm} value={formValues.email} placeholder='Email Here....' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                         {error !== null && error === "Please enter a valid email address" && <p className='text-red-600 '>{error}</p>}
                       </div>
                       
                   </div>

                   <img src="/assets/design2.svg" className='my-6 '/>

                   {/* //ADDRESS/// */}
                   <p className='font-semibold text-[20px] font-poppins text-[#25304C] ml-4 md:ml-0'>Shipping Address</p>
                   <div className='flex md:flex-row flex-col gap-y-5 gap-x-5 w-full  mt-7 px-4 md:px-0 '>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Address Line 1</label>
                         <input type='text' name="add1" onChange={handleForm} value={formValues.add1} placeholder='House no, flat no, etc' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       <div className='flex flex-col md:w-[50%]  w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Address Line 2</label>
                         <input type='text' name="add2" onChange={handleForm} value={formValues.add2} placeholder='Land mark, street, Building No, etc' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       
                   </div>

                    {/* //PIN STATE CITY/// */}
                    <div className='flex md:flex-row flex-col gap-y-5 gap-x-5 w-full  mt-5 px-4 md:px-0 '>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>Postal Code</label>
                         <input type='number' name="pin" onChange={handleForm} value={formValues.pin} placeholder='Postal code Here....' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>City</label>
                         <input type='text' name="city" onChange={handleForm} value={formValues.city} placeholder='City, Town' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       <div className='flex flex-col md:w-[50%] w-full '>
                         <label className='font-medium text-[18px] font-poppins text-[#25304C] mb-1 '>State</label>
                         <input type='text' name="state" onChange={handleForm} value={formValues.state} placeholder='State' required className='w-full h-[45px] border px-4 placeholder:text-[#6779A5] placeholder:font-normal placeholder:text-[14px] placeholder:font-poppins border-[#E4ECFF] rounded-[5px] '/>
                       </div>
                       
                   </div>
                </form>
                
                }
                

                <div className='xl:w-[35%] md:w-[70%] w-[100%]  h-fit py-2 border border-[#CACACA] rounded-[6px] px-4 '>
                   <p className='text-[20px] font-semibold font-poppins text-[#25304C] mb-4 mt-2 '>Coupon Code</p>
                   <form onSubmit={handleSubmit} className='w-full flex h-[45px] rounded-[10px] mt-1 ' >
                     <input name='code' id='code'  value={codeValue ? codeValue.code : ''} onChange={handleChange} placeholder='Enter Coupon Code' className={`w-[90%] h-full forced-colors:none focus:outline-[#25304C] duration-500 transition-all px-4 rounded-l-[10px] ${submit ? "bg-[#00a61148] border border-[#00A611] border-r-transparent ": "bg-white border border-[#D1D1D6] border-r-transparent "} `}/>
                    {submit ? <div onClick={handleClear} className={`w-[10%] h-full cursor-pointer  flex justify-center items-center rounded-r-[10px] ${submit ? "bg-[#00a61148] border border-[#00A611] border-l-transparent ": "bg-white border border-[#D1D1D6] border-l-transparent "}`}>
                     <X color='#ff0000' />
                    </div> :
                     <button type='submit' className={`w-[10%] h-full  flex justify-center items-center rounded-r-[10px] ${submit ? "bg-[#00a61148] border border-[#00A611] border-l-transparent ": "bg-white border border-[#D1D1D6] border-l-transparent "}`}>
                     <MoveRight />
                   </button>                   
                     }
                   </form>
                   <p className='font-poppins font-semibold text-[20px] text-[#25304C] mt-8 '>Order Summary</p>
                   <div className='flex w-full mt-6 px-2 justify-between '>
                     <p className='font-poppins font-semibold text-[20px] text-[#25304C]'>Products</p>
                     <p className='font-poppins font-semibold text-[20px] text-[#25304C]'>Price</p>
                   </div>
                   
                    <img src='/assets/line2.svg' className='w-full mt-3'/>
                    <div className='mt-4 max-h-[150px] overflow-y-scroll flex flex-col gap-y-5 '>
                     <div className='flex w-full justify-between '>
                      <p className='text-[14px] font-semibold font-poppins text-[#3A3A3A] '>Dry Fruits Box - Hexagonal</p>
                      <div>
                        <p className='font-semibold text-[20px] font-workSans text-[#3a3a3a] text-end '>₹13,999</p>
                        <p className='font-semibold text-[20px] font-workSans text-[#6779A5] text-end'><b className='font-semibold text-[14px] font-workSans text-[#6779A5] '>Discount:&nbsp;</b>-₹2,999</p>
                      </div>
                     </div>

                     <div className='flex w-full justify-between '>
                      <p className='text-[14px] font-semibold font-poppins text-[#3A3A3A] '>Dry Fruits Box - Hexagonal</p>
                      <div>
                        <p className='font-semibold text-[20px] font-workSans text-[#3a3a3a] text-end '>₹13,999</p>
                        <p className='font-semibold text-[20px] font-workSans text-[#6779A5] text-end'><b className='font-semibold text-[14px] font-workSans text-[#6779A5] '>Discount:&nbsp;</b>-₹2,999</p>
                      </div>
                     </div>

                     <div className='flex w-full justify-between '>
                      <p className='text-[14px] font-semibold font-poppins text-[#3A3A3A] '>Dry Fruits Box - Hexagonal</p>
                      <div>
                        <p className='font-semibold text-[20px] font-workSans text-[#3a3a3a] text-end '>₹13,999</p>
                        <p className='font-semibold text-[20px] font-workSans text-[#6779A5] text-end'><b className='font-semibold text-[14px] font-workSans text-[#6779A5] '>Discount:&nbsp;</b>-₹2,999</p>
                      </div>
                     </div>
                    </div>

                    <div className='w-full h-[50px] border-t flex justify-between items-center border-t-[#D1D1D6] mt-6 '>
                       <p className='font-semibold text-[20px] font-workSans text-[#25304C] '>Total Amount :</p>
                       <p className='font-semibold text-[20px] font-workSans text-[#00A611] '>₹ 11,999</p>
                    </div>

                    {change ? <div onClick={handleSubmitForm} className='w-full h-[44px] flex justify-center items-center rounded-[6px] bg-black mt-5 mb-1'>
                       <p className='text-[18px] font-semibold font-poppins text-white '>Make Payment</p>
                    </div> : <div onClick={()=>setChange(true)} className='w-full h-[44px] flex justify-center items-center rounded-[6px] bg-black mt-5 mb-1'>
                       <p className='text-[18px] font-semibold font-poppins text-white '>Place Order</p>
                    </div>}
                   
                </div>
            </div>
        </div>
        <Testimonial/>
        <CustomiseProducts/>
      </>
     
       
    )
}

export default Cart
