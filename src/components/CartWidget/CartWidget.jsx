import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
export const CartWidget = () => {

  const { totalQuantity } = useCart();

  if (totalQuantity === 0) {
    return null;
  }

  return (
    <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
      <span>🛒</span>
      <span style={{ marginLeft: '5px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.8rem' }}>
        {totalQuantity}
      </span>
    </Link>
  );
};