import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ProductGrid from './components/ProductGrid'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products/category/:categoryName" element={<ProductGrid />} />
      </Routes>
    </div>
  )
}

export default App