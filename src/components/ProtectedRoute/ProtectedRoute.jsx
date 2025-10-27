import { useAuth } from '../../context/AuthContext';    // 1. Importa el hook de Auth
import { Navigate } from 'react-router-dom';          // 2. Importa Navigate para redirigir
export const ProtectedRoute = ({ children }) => {

  const { user } = useAuth();

  // 5. LA LÓGICA DE PROTECCIÓN:
  // Si no hay usuario (user es null)...
  if (!user) {
    // ...redirigimos a la página de login
    return <Navigate to="/login" />;
  }

  // 6. Si SÍ hay usuario, simplemente mostramos los hijos
  // (o sea, el componente que estábamos protegiendo, ej: <Cart />)
  return children;
};