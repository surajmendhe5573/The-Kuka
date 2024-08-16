import { ChevronDown, Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data from API
    axios
      .get(`${VITE_APP_SERVER}/api/product`) // Replace with your API endpoint
      .then((response) => {
        // Assuming the response data is in response.data
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  // Filter products based on selected category and search value
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (searchValue === "" ||
        product.title.toLowerCase().includes(searchValue.toLowerCase()))
    );
  });

  const handleCheckboxChange = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].display_on_home =
      !updatedProducts[index].display_on_home;
    setProducts(updatedProducts);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <div
            className="bg-[#EAEDF3] p-3 rounded-md flex items-center gap-x-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <p className="text-[#211F3B] font-inter font-medium">
              {selectedCategory || "All Categories"}
            </p>
            <ChevronDown className="text-[#211F3B]" />
          </div>
          <div
            className={`absolute top-full left-0 bg-[#EAEDF3] w-full max-h-60 overflow-y-auto rounded-b-md z-50 ${
              open ? "block" : "hidden"
            } z-10`}
          >
            <ul>
              {products
                .map((product) => product.category)
                .filter(
                  (category, index, self) => self.indexOf(category) === index
                ) // Remove duplicates
                .map((category, index) => (
                  <li
                    key={index}
                    className="text-[#211F3B] font-inter font-medium p-2 hover:bg-[#E0E0E0] cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpen(false); // Close dropdown after selection
                    }}
                  >
                    {category}
                  </li>
                ))}
              <li
                className="text-[#211F3B] font-inter font-medium p-2 hover:bg-[#E0E0E0] cursor-pointer"
                onClick={() => {
                  setSelectedCategory("");
                  setOpen(false); // Close dropdown after selection
                }}
              >
                All Categories
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-5 bg-[#EAEDF3] rounded-md px-2">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-3 rounded-md outline-none bg-transparent text-[#211F3B] font-inter font-medium placeholder:text-[#211F3B] placeholder:font-medium"
            placeholder="Search"
          />
          <Search />
        </div>
      </div>
      <div className="flex flex-col items-start gap-y-4 mt-5">
        {filteredProducts.map((product, index) => (
          <div key={index} className="flex items-center gap-x-5 h-fit">
            <div className="w-52 h-52 rounded-md">
              <img
                className="w-full h-full object-cover rounded-md"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col items-start justify-between h-full">
              <div className="flex flex-col items-start justify-between h-full gap-y-5">
                <h2 className="text-[22px] font-normal text-[#101010] font-bangla">
                  {product.productName}
                </h2>
                <p className="text-[#6779A5] font-poppins text-sm">
                  {product.smallDescription}
                </p>
                <div className="flex items-center gap-x-5">
                  <p className="text-[#25304C] font-bangla text-2xl">
                    Price:{" "}
                    <span className="text-[#CE916B] font-bangla">
                      ₹{product.productPrice}
                    </span>
                  </p>
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={product.display_on_home}
                      onChange={() => handleCheckboxChange(index)}
                      className="accent-[#25304C]"
                      id={product.title}
                    />
                    <label
                      htmlFor={product.title}
                      className="text-[#25304C] text-xs font-semibold"
                    >
                      Display on Home
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="text-[#25304C] border border-[#25304C] py-[5.5px] px-[7.8px] rounded-[6px] font-semibold">
                  Give Discount
                </button>
                <button className="text-[#25304C] border border-[#25304C] py-[5.5px] px-[7.8px] rounded-[6px] font-semibold">
                  Edit
                </button>
                <button className="text-[#FF4242] border border-[#FF4242] py-[5.5px] px-[7.8px] rounded-[6px] font-semibold">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
