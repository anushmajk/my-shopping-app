import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products'

const ProductGrid = () => {
  return (
    <div className="container-fluid">
      <div className="row">
  {products.map((product) => (
    <div className="col-md-3 col-sm-6 mb-4  d-flex" key={product.id}>
      <ProductCard product={product} />
    </div>
  ))}
</div>
    </div>
  )
}

export default ProductGrid;