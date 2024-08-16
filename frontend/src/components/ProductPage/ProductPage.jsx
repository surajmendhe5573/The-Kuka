import React, {useState} from 'react'
import FilterSideBar from '../FilterSideBar/FilterSideBar'
import ProductsList from '../ProductsList/ProductsList';
import Hero from '../Hero/Hero';
import Testimonial from '../Testimonial/Testimonial';
import CustomiseProducts from '../CustomiseProducts/CustomiseProducts';
import productsList from '../productList/productsList.json'

const ProductPage = ({ products }) => {
    // const productsList = [
    //     {   
    //         id: 1,
    //         img: "/assets/spiceBox.png",
    //         name: "Wooden Spice Box",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Boxes",
    //         wood: "Teak Wood",
    //         finish: "Matte Finish",
    //         price: 500,
    //     },
    //     {
    //         id: 2,
    //         img: "/assets/dryFruitBox.png",
    //         name: "Wooden Dry Fruits Box",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Boxes",
    //         wood: "Regular Wood",
    //         finish: "Glossy Finish",
    //         price: 700,
    //     },
    //     {   
    //         id: 3,
    //         img: "/assets/hexagonBox.png",
    //         name: "Dry Fruits Box Hexagonal",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Boxes",
    //         wood: "Teak Wood",
    //         finish: "Glossy Finish",
    //         price: 800,
    //     },
    //     {   
    //         id: 4,
    //         img: "/assets/rectangleTray.png",
    //         name: "Serving Tray Ractangle",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Trays",
    //         wood: "Teak Wood",
    //         finish: "Glossy Finish",
    //         price: 1500,
    //     },
    //     {
    //         id: 5,
    //         img: "/assets/squareTray.png",
    //         name: "Serving Tray Square",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Trays",
    //         wood: "Regular Wood",
    //         finish: "Glossy Finish",
    //         price: 500,
    //     },
    //     {
    //         id: 6,
    //         img: "/assets/roundTray.png",
    //         name: "Serving Tray Round",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Trays",
    //         wood: "Regular Wood",
    //         finish: "Matte Finish",
    //         price: 900,
    //     },
    //     {
    //         id: 7,
    //         img: "/assets/beerMug.png",
    //         name: "Beer Mug",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Mugs",
    //         wood: "Regular Wood",
    //         finish: "Matte Finish",
    //         price: 1000,
    //     },
    //     {
    //         id: 8,
    //         img: "/assets/cup.png",
    //         name: "Tea Mug",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Mugs",
    //         wood: "Regular Wood",
    //         finish: "Glossy Finish",
    //         price: 1200,
    //     },
    //     {
    //         id: 9,
    //         img: "/assets/teacup.png",
    //         name: "Coffee Mug",
    //         desc: "Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit.",
    //         product: "Wooden Mugs",
    //         wood: "Teak Wood",
    //         finish: "Matte Finish",
    //         price: 1300,
    //     },
    // ]

    const [filterState, setFilterState] = useState({
        category: "",
        priceRange: [0, 3000],
        types: [],
        woods: [],
        searchedProduct: ""
      });
    
      const handleFilterChange = (newFilterState) => {
        setFilterState(newFilterState);
      };

      const filteredProducts = productsList.filter((product) => {
        const matchesCategory = filterState.category
          ? product.product === filterState.category
          : true;
          const matchesPriceRange =
          filterState.priceRange.length === 2
            ? product.price >= filterState.priceRange[0] &&
              product.price <= filterState.priceRange[1]
            : true;
        const matchesTypes = filterState.types.length
          ? filterState.types.includes(product.finish)
          : true;
        const matchesWoods = filterState.woods.length
          ? filterState.woods.includes(product.wood)
          : true;
        const matchesSearch = filterState.searchedProduct
          ? product.name.toLowerCase().includes(filterState.searchedProduct.toLowerCase())
          : true;
    
        return (
          matchesCategory && matchesPriceRange && matchesTypes && matchesWoods && matchesSearch
        );
      });

   
  return (
    <>
    <Hero/>
     <div className='w-full flex gap-x-4 mt-5 xl:flex-row flex-col items-center xl:items-start justify-center'>
       <FilterSideBar onFilterChange={handleFilterChange} filterState={filterState} />
       <ProductsList products={filteredProducts} filterState={filterState} />
    </div>
    <Testimonial/>
    <CustomiseProducts/>
    </>
   
  )
}

export default ProductPage
