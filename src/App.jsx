import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ProductGrid from './components/ProductGrid'
import {routes, Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductGrid />} />
      </Routes>
      {/* <Routes>
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default App