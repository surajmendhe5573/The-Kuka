import React, { useState } from "react";
import axios from "axios";

const VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;

const CustomiseProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        `${VITE_APP_SERVER}/api/contact`,
        formData
      );

      if (response.status === 200) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      }
    } catch (err) {
      console.error("Error sending form data:", err);
      setError("Failed to send your message. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="md:text-[30px] text-[26px] font-normal font-bangla text-[#25304C]">
          How to Customise Products
        </h1>
        <img src="/assets/design.svg" />
      </div>

      <div className="w-full flex flex-col items-center gap-y-14 lg:flex-row lg:justify-center gap-x-10">
        <div className="lg:w-[50%] w-full flex flex-col items-center">
          <div className="flex flex-col items-start gap-y-8">
            <div className="flex flex-row gap-x-8 lg:gap-x-10 items-center">
              <p className="lg:text-[120px] md:text-[60px] text-[40px] font-black text-[rgba(67,80,114,0.4)] font-poppins">
                01
              </p>
              <div className="">
                <img
                  src="/assets/doc.svg"
                  className="lg:w-[54px] lg:h-[54px] md:w-[44px] md:h-[44px] w-[34px] h-[34px]"
                />
                <p className="font-semibold lg:text-[25px] text-[20px] font-poppins text-[#25304C]">
                  Fill the Form
                </p>
                <p className="font-medium lg:text-[18px] text-[14px] font-poppins text-[#25304C]">
                  Fill the form given on the right side
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-8 lg:gap-x-10 items-center">
              <p className="lg:text-[120px] md:text-[60px] text-[40px] font-black text-[rgba(67,80,114,0.4)] font-poppins">
                02
              </p>
              <div className="">
                <img
                  src="/assets/doc.svg"
                  className="lg:w-[54px] lg:h-[54px] md:w-[44px] md:h-[44px] w-[34px] h-[34px]"
                />
                <p className="font-semibold lg:text-[25px] text-[20px] font-poppins text-[#25304C]">
                  Get a Quote
                </p>
                <p className="font-medium lg:text-[18px] text-[14px] font-poppins text-[#25304C]">
                  Our team will respond soon
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-8 lg:gap-x-10 items-center">
              <p className="lg:text-[120px] md:text-[60px] text-[40px] font-black text-[rgba(67,80,114,0.4)] font-poppins">
                03
              </p>
              <div className="">
                <img
                  src="/assets/relax.svg"
                  className="lg:w-[54px] lg:h-[54px] md:w-[44px] md:h-[44px] w-[34px] h-[34px]"
                />
                <p className="font-semibold lg:text-[25px] text-[20px] font-poppins text-[#25304C]">
                  Relax
                </p>
                <p className="font-medium lg:text-[18px] text-[14px] font-poppins text-[#25304C]">
                  Relax and wait for your product to be ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] md:w-[80%] w-full flex justify-center ">
          <form
            className="xl:w-[80%] w-[90%] h-fit rounded-[10px] bg-[rgba(234,237,243,1)] px-5 md:px-7 lg:px-10"
            onSubmit={handleSubmit}
          >
            <p className="text-[#101010] font-workSans font-semibold text-[26px] mb-8 pt-10">
              Customise Product?
            </p>

            <div className="w-full flex flex-col gap-y-5">
              <input
                name="name"
                id="name"
                type="text"
                required
                placeholder="Enter Your Name"
                className="w-full h-[45px] bg-white placeholder:text-[13px] placeholder:font-normal placeholder:font-workSans rounded-[10px] px-6 placeholder:text-[#535353] "
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder="Enter Your Email"
                className="w-full h-[45px] bg-white placeholder:text-[13px] placeholder:font-normal placeholder:font-workSans rounded-[10px] px-6 placeholder:text-[#535353] "
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="phone"
                id="phone"
                type="number"
                required
                placeholder="Enter Your Mobile Number"
                className="w-full h-[45px] bg-white placeholder:text-[13px] placeholder:font-normal placeholder:font-workSans rounded-[10px] px-6 placeholder:text-[#535353] "
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                type="text"
                required
                placeholder="Message"
                className="w-full h-[212px] bg-white placeholder:text-[13px] placeholder:font-normal placeholder:font-workSans rounded-[10px] px-6 pt-6 placeholder:text-[#535353] "
                value={formData.message}
                onChange={handleChange}
              />
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {success && <p className="text-green-500 mt-4">{success}</p>}
              <button
                type="submit"
                className="w-full h-[47px] mb-7 bg-black text-white rounded-full text-[18px] font-semibold font-poppins mt-5 "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomiseProducts;
