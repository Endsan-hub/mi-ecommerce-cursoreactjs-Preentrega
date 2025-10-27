import { createContext, useState, useContext } from 'react';
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // 4. Función para agregar al carrito (Req 1: evento de clic la usará)
  const addItem = (product, quantity) => {
    // Lógica para no duplicar productos
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      // Si ya está, actualiza la cantidad
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si es nuevo, lo agrega
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // 5. Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // 6. Función para calcular el total de ítems (para el CartWidget)
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity();

  // 7. Pasamos el estado y las funciones por 'value'
  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};