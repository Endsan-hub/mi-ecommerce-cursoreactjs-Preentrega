import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { useAuth } from '../../context/AuthContext';
export const NavBar = () => {
 
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#f0f0f0', alignItems: 'center' }}>
      <Link to="/"><h1>Mi Tienda</h1></Link>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/categoria/electronics">Electrónica</Link></li>
        <li><Link to="/categoria/jewelery">Joyería</Link></li>
      </ul>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <CartWidget />
        
        {/* 3. LÓGICA DE LOGIN/LOGOUT */}
        {user ? (
          // Si hay usuario, muestra su nombre y botón de Logout
          <>
            <span>Hola, {user.username}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          // Si no hay usuario, muestra el Link a Login
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};