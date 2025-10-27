import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Login } from './components/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        
        {/* 2. AGREGA LA RUTA DE LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 3. MODIFICA LA RUTA DEL CARRITO */}
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}
export default App;