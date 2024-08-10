import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import MainPage from "./Admin/MainPage";
import AdminOutlet from "./outlet/AdminOutlet";
import MainOutlet from "./outlet/MainOutlet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/admin" element={<AdminOutlet />}>
            <Route path="/admin" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
