import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import ProductDetails from './components/ProductDetails/ProductDetails'
import AboutUs from './components/AboutUs/AboutUs'
import Cart from './components/Cart/Cart'
import MainPage from './Admin/MainPage'

function App() {
  

  return (
    <>
     
     <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/productDetails' element={<ProductDetails/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/admin' element={<MainPage/>}></Route>
      </Routes>
      {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App
