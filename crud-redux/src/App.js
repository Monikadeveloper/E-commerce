import './App.css'
import Banner from './Components/Banner'
import Category from './Components/Category'
import Electronics from './Components/Electronics'
import MensEdition from './Components/MensEdition'
import Navbar from './Components/Navbar'
import Product from './Components/Product'

import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signin from './Components/Signin'
import Cart from './Components/Cart'
import SpecialEdition from './Components/SpecialEdition'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mensedition" element={<MensEdition />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/special" element={<SpecialEdition />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
