import { createContext, useState, useContext } from 'react';
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity();

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};