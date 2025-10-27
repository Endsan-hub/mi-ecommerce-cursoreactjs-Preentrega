import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
export const Cart = () => {
  
  const { cart, clearCart } = useCart();

  // 3. Renderizado condicional
  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  // 4. Si hay productos, los muestra (Req 1: Mostrar el carrito)
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px' }}>
          <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '20px' }} />
          <div>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
          </div>
        </div>
      ))}

      <button onClick={clearCart} style={{ marginTop: '20px' }}>
        Limpiar Carrito
      </button>
    </div>
  );
};