import React from 'react'
import { useCart } from '../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  if (cartItems.length === 0) {
    return <div className="text-center mt-5 text-white">Your cart is empty</div>
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart-container">
      <h5 className="cart-header">My cart, {cartItems.length} items</h5>

      {cartItems.map((item) => (
        <div key={`${item.id}-${item.size}-${item.color}`} className="cart-row">
          <div className="cart-info">
            <h6>{item.name}</h6>
            <p>${item.price.toFixed(2)}</p>
            <p className="size-label">Size:</p>
            <div className="size-row">
              {item.sizes.map((s) => (
                <span key={s} className={`size-box ${s === item.size ? 'active-size' : ''}`}>
                  {s}
                </span>
              ))}
            </div>
            <p className="size-label">Color:</p>
<div className="size-row">
  {item.colors.map((c) => (
    <div
      key={c}
      className={`color-dot ${c === item.color ? 'active-color' : ''}`}
      style={{ backgroundColor: c.toLowerCase() }}
      title={c}
    ></div>
  ))}
</div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size, item.color)}>
              Remove
            </button>
          </div>

          <div className="qty-controls">
            <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>−</button>
          </div>

          <img src={item.image} alt={item.name} className="cart-img" />
        </div>
      ))}

      <div className="cart-total">
        <p>Total:</p>
        <h5>${total.toFixed(2)}</h5>
      </div>
      <div className="cart-buttons">
        <Link to="/products" className="btn btn-outline-dark">Continue Shopping</Link>
        <button className="btn checkout-btn" onClick={() => alert('Checkout coming soon!')}>
            Checkout
        </button>
    </div>
    </div>
  )
}

export default Cart



// import React from 'react'
// import { useCart } from '../context/CartContext'

// const Cart = () => {
//   const { cartItems } = useCart()

//   if (cartItems.length === 0) {
//     return <div className="text-center mt-5">Your cart is empty</div>
//   }

//   return (
//     <div className="container mt-5">
//       {cartItems.map((item) => (
//         <div key={`${item.id}-${item.size}-${item.color}`} className="row mb-3">
//           <div className="col-md-2">
//             <img src={item.image} alt={item.name} className="img-fluid" />
//           </div>
//           <div className="col-md-4">
//             <h5>{item.name}</h5>
//             <p>Size: {item.size}</p>
//             <p>Color: {item.color}</p>
//           </div>
//           <div className="col-md-2">
//             <p>${item.price.toFixed(2)}</p>
//           </div>
//           <div className="col-md-2">
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Cart