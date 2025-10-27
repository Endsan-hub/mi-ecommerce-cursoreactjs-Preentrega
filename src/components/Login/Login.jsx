import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
 
  const { login } = useAuth();
  // 2. Traemos 'navigate' para redirigir después del login
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página
    // 3. Simulamos un login. Pasamos un email falso
    login({ email: 'usuario@test.com' }); 

    // 4. Redirigimos al usuario a la página de inicio
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        {/* No necesitamos inputs reales para esta simulación */}
        <p>Presiona "Login" para simular el inicio de sesión.</p>
        <button type="submit">Login Simulado</button>
      </form>
    </div>
  );
};