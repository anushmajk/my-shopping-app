import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products'
import { useParams } from 'react-router-dom'


const ProductGrid = () => {
  const { categoryName } = useParams()
  const filteredProducts = categoryName
    ? products.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase())
    : products
console.log("Category:", categoryName);
console.log(filteredProducts);
  return (
    <div className="container-fluid">
      <div className="row">
  {filteredProducts.map((product) => (
    <div className="col-md-3 col-sm-6 mb-4  d-flex" key={product.id}>
      <ProductCard product={product} />
    </div>
  ))}
</div>
    </div>
  )
}

export default ProductGrid;