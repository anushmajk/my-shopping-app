import React from 'react'
 import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className="card product-card h-100">
      <img src={product.image} className="card-img-top" alt="Product" />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button className="btn custom-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;