import React, { useState } from "react";

const Slider = () => {
  const [formData, setFormData] = useState({
    title: "",
    smallDesc: "",
    img1: "",
  });
  const [slides, setSlides] = useState([]);
  const img = "/assets/Image.png";
  const [image1, setImage1] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleImageUpload1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage1(imageUrl);
      setFormData({ ...formData, img1: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSlides([...slides, formData]);
    setFormData({ title: "", smallDesc: "", img1: "" });
    setImage1(null);
  };

  return (
    <div className="bg-white w-full rounded-[10px]   my-2 font-workSans  p-6 ">
      <p className="text-[#25304C] font-semibold text-[24px] ">Slider Images</p>

      <div className="flex w-full xl:flex-row flex-col mt-14 gap-10  ">
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-[40%] flex flex-col gap-y-8 items-center xl:items-start"
        >
          <div className=" w-[90%] xl:w-full flex flex-col gap-y-2">
            <label className="font-semibold text-[#25304C] text-[14px] ">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              placeholder="Enter Title"
              className="inputField w-full h-[45px] bg-[#EAEDF3] px-6"
            />
          </div>

          <div className=" w-[90%] xl:w-full flex flex-col gap-y-2">
            <label className="font-semibold text-[#25304C] text-[14px] ">
              Small Description
            </label>
            <textarea
              type="text"
              name="smallDesc"
              onChange={handleChange}
              value={formData.smallDesc}
              placeholder="Enter Small Description"
              className="inputField w-full h-[157px] bg-[#EAEDF3] p-6"
            />
          </div>

          <div className="md:w-[226px] w-[90%] flex flex-col justify-center  items-center h-[176px] bg-[#EAEDF3] rounded-[10px] ">
            <img
              src={image1 || img}
              className="w-[55px] h-[55px] object-contain "
            />
            <p className="font-normal text-[12px] font-euclid text-[#211F3B] mt-1 ">
              Upload Product Image
            </p>
            <input
              id="img1"
              type="file"
              name="img1"
              onChange={handleImageUpload1}
              style={{ display: "none" }}
            />
            <label
              htmlFor="img1"
              className="font-semibold text-[16px] font-euclid text-[#211F3B] mt-2 cursor-pointer "
            >
              Upload
            </label>
          </div>

          <div className=" w-full flex flex-row md:justify-start justify-center gap-x-5 ">
            <button
              type="button"
              onClick={() =>
                setFormData({ title: "", smallDesc: "", img1: "" })
              }
              className="w-[50%] md:w-[193px] h-[45px] rounded-[10px] bg-white  text-[#25304c] text-[16px] border border-[#25304c] font-semibold "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[50%] md:w-[193px] h-[45px] rounded-[10px] bg-[#25304C]  md:-ml-1.5 text-white text-[16px] font-semibold "
            >
              Add
            </button>
          </div>
        </form>

        <div className="w-full xl:w-[60%] overflow-x-auto">
          <table className="min-w-[300px] w-full mt-5 table-fixed">
            <thead>
              <tr className="bg-[#25304C] h-[45px]">
                <th className="text-[16px] text-white font-semibold w-1/12">
                  Slide.no
                </th>
                <th className="text-[16px] text-white font-semibold w-1/3">
                  Title
                </th>
                <th className="text-[16px] text-white font-semibold w-2/3">
                  Description
                </th>
              </tr>
            </thead>

            <tbody>
              {slides.map((item, index) => (
                <tr className="border border-[3eaeaeb]" key={index}>
                  <td className="border border-[3eaeaeb] h-10">
                    <p className="text-[15px] font-medium text-[#211F3B] text-center">
                      {index + 1}
                    </p>
                  </td>
                  <td className="border border-[3eaeaeb] h-10">
                    <p className="text-[15px] font-medium text-[#211F3B] pl-4 break-words whitespace-normal">
                      {item.title}
                    </p>
                  </td>
                  <td className="border border-[3eaeaeb] h-10">
                    <p className="text-[15px] font-medium text-[#211F3B] pl-2 break-words whitespace-normal">
                      {item.smallDesc}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full flex flex-row md:justify-end xl:mt-20 mt-10 justify-center gap-x-5">
            <button
              type="button"
              onClick={() =>
                setFormData({ title: "", smallDesc: "", img1: "" })
              }
              className="w-[50%] md:w-[154px] h-[45px] rounded-[10px] bg-white text-[#25304c] text-[16px] border border-[#25304c] font-semibold"
            >
              Cancel
            </button>
            <button className="w-[50%] md:w-[154px] h-[45px] rounded-[10px] bg-[#25304C] md:-ml-1.5 text-white text-[16px] font-semibold">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
