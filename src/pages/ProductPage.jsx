import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import './ProductPage.css'

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((product) => product.id === Number(id))

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-start">
        <div className="col-md-5 text-center">
          <img src={product.image} alt={product.name} className="product-detail-img" />
        </div>

        <div className="col-md-5">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>

          <div className="mb-3">
            <strong>Size:</strong>
            <div className="d-flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <button key={size} className="btn btn-outline-dark size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <strong>Color:</strong>
            <div className="d-flex gap-2 mt-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="color-swatch"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>

          <h3 className="mt-4">${product.price.toFixed(2)}</h3>

          <button className="btn custom-btn mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage