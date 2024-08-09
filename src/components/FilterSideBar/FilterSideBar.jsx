import React, { useState } from "react";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
// import "rc-slider/assets/index.css";
import { Range, getTrackBackground } from "react-range";

const FilterSideBar = ({ onFilterChange, filterState }) => {
  const STEP = 50;
  const MIN = 0;
  const MAX = 3000;

  const [isOpen, setIsOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState([MIN, MAX]);

  const handleRangeChange = (value) => {
    setRangeValue(value);
  };

  const [togglePriceRange, setTogglePriceRange] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleType, setToggleType] = useState(false);
  const [toggleWood, setToggleWood] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [selectedTypes, setSelectedTypes] = useState([]);
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
       setSelectedTypes(selectedTypes.filter((selected) => selected !== type));
    } else {
       setSelectedTypes([...selectedTypes, type]);
    }
    console.log(selectedTypes)
  };

  const [selectedWoods, setSelectedWoods] = useState([]);
  const handleWoodChange = (wood) => {
    if (selectedWoods.includes(wood)) {
       setSelectedWoods(selectedWoods.filter((selected) => selected !== wood));
    } else {
       setSelectedWoods([...selectedWoods, wood]);
    }
    console.log(selectedWoods)
  };

  React.useEffect(() => {
    onFilterChange({
      category: selectCategory,
      priceRange: rangeValue,
      types: selectedTypes,
      woods: selectedWoods,
      searchedProduct: searchValue
    });
  }, [selectCategory, rangeValue, selectedTypes, selectedWoods, searchValue]);

  const resetFilters = () => {
    setSelectCategory("");
    setRangeValue([MIN, MAX]);
    setSelectedTypes([]);
    setSelectedWoods([]);
    setSearchValue("");
    onFilterChange({
        category: "",
        priceRange: [MIN, MAX],
        types: [],
        woods: [],
        searchedProduct: ""
      });
  }

  return (
    <div className=" w-[95%] xl:w-[20%] h-fit rounded-[5px] pb-3 bg-white border border-[#D1D1D6] flex flex-col items-start origin-left gap-y-5">
      <div className=" text-white w-full h-[55px] bg-[#25304C] flex justify-center items-center  rounded-t-[5px]">
        <p className="text-center text-[18px] font-workSans font-bold">Filter By</p>
      </div>
      <div className="w-[90%] mx-auto p-2 rounded-[5px] border border-[#D1D1D6] flex items-center gap-1">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Products"
          className="w-full outline-none"
        />
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4763 0C9.60653 0 12.1479 2.5104 12.1486 5.60225C12.1492 8.71688 9.62033 11.2292 6.48681 11.2273C3.34607 11.2257 0.821129 8.71786 0.824741 5.6042C0.828354 2.51268 3.36216 0 6.4763 0ZM6.48681 0.795019C3.82196 0.787205 1.62873 2.93981 1.62118 5.57002C1.61362 8.25264 3.76711 10.4271 6.44379 10.4391C9.14378 10.4511 11.34 8.30863 11.3498 5.65271C11.36 2.95772 9.20257 0.802507 6.48681 0.794693V0.795019Z"
            fill="#25304C"
          />
          <path
            d="M10.5203 10.5657C10.8419 10.2496 11.1434 9.953 11.4587 9.64307C11.4787 9.6613 11.5184 9.69548 11.5552 9.73227C13.2693 11.4314 14.984 13.1295 16.6938 14.8328C16.7936 14.9321 16.8859 15.0636 16.9217 15.1962C16.9992 15.483 16.8317 15.7174 16.4934 15.929C16.2786 16.0634 16.0192 16.0022 15.8093 15.7942C14.2654 14.2647 12.7228 12.7339 11.1792 11.2045C10.9594 10.987 10.7351 10.7741 10.52 10.5657H10.5203Z"
            fill="#25304C"
          />
          <path
            d="M6.63194 1.81445C7.72593 1.84636 8.75554 2.3334 9.53687 3.31724C9.6863 3.50541 9.67349 3.69912 9.51289 3.81763C9.35886 3.93092 9.17724 3.88827 9.03175 3.70401C8.07045 2.48674 6.50155 2.11527 5.08341 2.769C4.86993 2.86732 4.68962 2.82174 4.60555 2.64854C4.52081 2.47404 4.59471 2.30214 4.80589 2.20024C5.33071 1.94728 5.88608 1.82064 6.63227 1.81445H6.63194Z"
            fill="#25304C"
          />
        </svg>
      </div>

      <div onClick={()=>resetFilters()} className="flex items-center gap-x-2">
      <p className="text-[#25304C] font-medium  text-[16px] pl-5 ">Reset Filters</p>
      <RotateCcw size={14} color="#25304C"/>
      </div>
     

      {/* Category */}
      <div className="w-full relative group">
        <div
          className="flex items-center justify-between w-full cursor-pointer px-5"
          onClick={() => setToggleCategory(!toggleCategory)}
        >
          <p className="text-[#6779A5] text-base font-workSans font-semibold">Category</p>
          {toggleCategory ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" id="slider-down-up" />
          )}
        </div>

        {toggleCategory && (
          <div className=" flex flex-col gap-y-2  mx-4  pb-5 border-b mt-[10px]">
             <div onClick={()=>setSelectCategory("Wooden Mugs")} className={`w-full cursor-pointer  h-[46px] ${selectCategory === "Wooden Mugs" ? "bg-[#EAEDF3] font-bold " : "bg-transparent font-medium" } rounded-[8px] text-[16px] text-[#101010] font-workSans flex justify-center items-center`}>
                Wooden Mugs
             </div>
             <div onClick={()=>setSelectCategory(" Wooden Cake Stands")} className={`w-full cursor-pointer  h-[46px] ${selectCategory === " Wooden Cake Stands" ? "bg-[#EAEDF3] font-bold " : "bg-transparent font-medium" } rounded-[8px] text-[16px] text-[#101010] font-workSans flex justify-center items-center`}>
                Wooden Cake Stands
             </div>
             <div onClick={()=>setSelectCategory("Wooden Trays")} className={`w-full cursor-pointer  h-[46px] ${selectCategory === "Wooden Trays" ? "bg-[#EAEDF3] font-bold " : "bg-transparent font-medium" } rounded-[8px] text-[16px] text-[#101010] font-workSans flex justify-center items-center`}>
                Wooden Trays
             </div>
             <div onClick={()=>setSelectCategory("Wooden Boxes")} className={`w-full cursor-pointer  h-[46px] ${selectCategory === "Wooden Boxes" ? "bg-[#EAEDF3] font-bold " : "bg-transparent font-medium" } rounded-[8px] text-[16px] text-[#101010] font-workSans flex justify-center items-center`}>
                Wooden Boxes
             </div>
          </div>
        )}
      </div>

     {/* Price Range */}
      <div className="w-full relative group">
        <div
          className="flex items-center justify-between w-full cursor-pointer px-5"
          onClick={() => setTogglePriceRange(!togglePriceRange)}
        >
          <p className="text-[#6779A5] font-workSans text-base font-semibold">Price</p>
          {togglePriceRange ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" id="slider-down-up" />
          )}
        </div>

        {togglePriceRange && (
          <div className=" mx-4 border-b pb-5">
            <div
              id="slider-dropdown"
              className="overflow-hidden w-full h-fit transition-all duration-300"
            >
              <div className="mt-2 pr-5 flex flex-col gap-y-3">
                <p className="text-center text-base font-normal font-workSans">
                  Select Price Range
                </p>
                <div className="w-[80%] mx-auto">
                  <Range
                    values={rangeValue}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={handleRangeChange}
                    renderTrack={({ props, children }) => (
                      <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                          ...props.style,
                          height: "36px",
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <div
                          ref={props.ref}
                          style={{
                            height: "5px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                              values: rangeValue,
                              colors: ["#ccc", "#25304C", "#ccc"],
                              min: MIN,
                              max: MAX,
                            }),
                            alignSelf: "center",
                          }}
                        >
                          {children}
                        </div>
                      </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "18px",
                          width: "18px",
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                          border: "1px solid #D1D1D6",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          outline: "none",
                          boxShadow: "0px 4px 11px 0px #D1D1D64D",
                        }}
                      ></div>
                    )}
                  />
                  <div className="flex justify-between">
                    {Array.from({ length: 11 }, (_, i) => (
                      <span key={i} style={{ color: "#ccc" }}>
                        •
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={rangeValue[0]}
                    onChange={(e) =>
                      handleRangeChange([
                        parseInt(e.target.value),
                        rangeValue[1],
                      ])
                    }
                    className="border border-[#D1D1D6] text-center rounded-[6px] w-full outline-none px-1"
                  />
                  <p>to</p>
                  <input
                    type="text"
                    value={rangeValue[1]}
                    onChange={(e) =>
                      handleRangeChange([
                        rangeValue[0],
                        parseInt(e.target.value),
                      ])
                    }
                    className="border border-[#D1D1D6] text-center rounded-[6px] w-full outline-none px-1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Finishing type */}
      <div className="w-full relative group">
        <div
          className="flex items-center justify-between w-full cursor-pointer px-5"
          onClick={() => setToggleType(!toggleType)}
        >
          <p className=" text-[#6779A5] font-workSans text-base font-semibold">
            Finish
          </p>
          {toggleType ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" id="slider-down-up" />
          )}
        </div>

        {toggleType && (
          <div className=" flex flex-col gap-y-2 pl-6 mx-4  pb-5 border-b mt-[10px]">
            <div className="flex gap-x-4">
            <input type="checkbox" checked={selectedTypes.includes("Matte Finish")} 
              onChange={() => handleTypeChange("Matte Finish")}  value="Matte Finish" className="accent-[#25304C]" />
              <label className="text-[#101010] text-base font-workSans text-start font-normal">
                Matte Finish
              </label>
            </div>
            <div className="flex  gap-x-4">
            <input type="checkbox" checked={selectedTypes.includes("Glossy Finish")} 
              onChange={() => handleTypeChange("Glossy Finish")}  value="Glossy Finish" className="accent-[#25304C]" />
              <label className="text-[#101010] text-base font-workSans text-start  font-normal">
                Glossy Finish
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Wood Type */}
      <div className="w-full relative group">
        <div
          className="flex items-center justify-between w-full cursor-pointer px-5"
          onClick={() => setToggleWood(!toggleWood)}
        >
          <p className=" text-[#6779A5] font-workSans text-base font-semibold">
            Wood
          </p>
          {toggleWood ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" id="slider-down-up" />
          )}
        </div>

        {toggleWood && (
          <div className=" flex flex-col gap-y-2 pl-6 mx-4  pb-5 border-b mt-[10px]">
            <div className="flex gap-x-4">
              <input type="checkbox" checked={selectedWoods.includes("Teak Wood")} 
              onChange={() => handleWoodChange("Teak Wood")}  value="Teak Wood" className="accent-[#25304C]" />
              <label className="text-[#101010] text-base font-workSans text-start font-normal">
                Teak Wood
              </label>
            </div>
            <div className="flex  gap-x-4">
              <input type="checkbox" checked={selectedWoods.includes("Regular Wood")} 
              onChange={() => handleWoodChange("Regular Wood")}  value="Regular Wood" className="accent-[#25304C]" />
              <label className="text-[#101010] text-base font-workSans text-start  font-normal">
                Regular Wood
              </label>
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default FilterSideBar;