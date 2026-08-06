import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
 const addToCart = (product, size, color) => {
  setCartItems((prevItems) => {
    const exists = prevItems.some(
      (item) => item.id === product.id && item.size === size && item.color === color
    )

    if (exists) {
      return prevItems.map((item) => {
        if (item.id === product.id && item.size === size && item.color === color) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    } else {
      return [...prevItems, { ...product, size, color, quantity: 1 }]
    }
  })
}
const removeFromCart = (id, size, color) => {
  setCartItems((prevItems) =>
    prevItems.filter(
      (item) => !(item.id === id && item.size === size && item.color === color)
    )
  );
};

const updateQuantity = (id, size, color, newQuantity) => {
  if (newQuantity < 1) {
    removeFromCart(id, size, color);
    return;
  }
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);