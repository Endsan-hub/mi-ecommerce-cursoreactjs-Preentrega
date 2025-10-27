import { createContext, useState, useContext } from 'react';
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);

  // 5. Función para simular un login
  const login = (userData) => {
    // En una app real, aquí llamarías a tu API
    setUser({ username: userData.email, id: 1 }); // Guardamos un usuario simulado
  };

  // 6. Función para logout
  const logout = () => {
    setUser(null);
  };

  // 7. Proveemos el 'user' y las funciones
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};