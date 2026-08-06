import React from 'react'
import { Link } from 'react-router-dom'
 import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
     <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
    <div className="card product-card h-100">
      <img src={product.image} className="card-img-top" alt="Product" />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button className="btn custom-btn">
          View Details
        </button>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard;