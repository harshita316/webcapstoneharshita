import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Check local storage on initial load
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('techgear_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('techgear_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
