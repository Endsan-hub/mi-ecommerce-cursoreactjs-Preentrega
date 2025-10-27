import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
export const CartWidget = () => {

  const { totalQuantity } = useCart();

  // 2. Si no hay ítems, no muestra nada
  if (totalQuantity === 0) {
    return null;
  }

  // 3. Si hay ítems, muestra el ícono y la cantidad
  return (
    <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
      {/* (Puedes reemplazar "🛒" por un ícono de FontAwesome o Material Icons) */}
      <span>🛒</span>
      <span style={{ marginLeft: '5px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.8rem' }}>
        {totalQuantity}
      </span>
    </Link>
  );
};