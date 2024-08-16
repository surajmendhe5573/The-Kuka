import React, { useState } from "react";
import AdminHome from "./AdminHome";
import AdminProducts from "./ProductsPage/AdminProducts";
import Slider from "./Slider";
import Customers from "./Customers";
import { Link } from "react-router-dom";

const MobileMainPage = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="w-full relative h-full flex justify-center xl:hidden gap-x-3 bg-[#F9F9F9] font-workSans ">
      <div className="sideBar fixed z-50 xl:w-[20%] w-[90%] md:w-[80%] xl:flex flex-col  py-6 items-center bg-white h-screen ">
        <img src="/assets/KUKAlogo.svg" />

        <div className="w-full flex flex-col items-center gap-y-4 mt-44 ">
          <Link to="/admin/home"
            onClick={() => setActive("Home")}
            className={`w-[96%] ${
              active === "Home"
                ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold"
                : "text-black font-normal border-l-transparent "
            }  h-[50px] cursor-pointer flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}
          >
            <p className="pl-10 ">Home</p>
          </Link>
          <Link to="/admin/products"
            onClick={() => setActive("Products")}
            className={`w-[96%] ${
              active === "Products"
                ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold"
                : "text-black font-normal border-l-transparent "
            }  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}
          >
            <p className="pl-10 ">Products</p>
          </Link>
          <Link to="/admin/slider"
            onClick={() => setActive("Slider")}
            className={`w-[96%] ${
              active === "Slider"
                ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold"
                : "text-black font-normal border-l-transparent "
            }  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}
          >
            <p className="pl-10 ">Slider</p>
          </Link>
          <Link to="/admin/customers"
            onClick={() => setActive("Customers")}
            className={`w-[96%] ${
              active === "Customers"
                ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold"
                : "text-black font-normal border-l-transparent "
            }  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}
          >
            <p className="pl-10 ">Customers</p>
          </Link>
          <Link to="/admin/reviews"
            onClick={() => setActive("Reviews")}
            className={`w-[96%] ${
              active === "Reviews"
                ? "bg-[#6779A533] border-l-[#25304C] text-[#25304C]  font-bold"
                : "text-black font-normal border-l-transparent "
            }  cursor-pointer h-[50px] flex items-center  rounded-[4px] border-l-[6px]   text-[18px]`}
          >
            <p className="pl-10 ">Reviews</p>
          </Link>
        </div>
      </div>

      {/* <div className="mainContent xl:ml-[21%] xl:w-[80%] w-full bg-[#F9F9F9]">
        {active === "Home" && <AdminHome />}
        {active === "Products" && <AdminProducts />}
        {active === "Slider" && <Slider />}
        {active === "Customers" && <Customers/>}
      </div> */}
    </div>
  );
};

export default MobileMainPage;
