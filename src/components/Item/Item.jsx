// 1. Importamos Link para la navegación (Req 3)
import { Link } from 'react-router-dom';

// 2. Recibe el 'producto' individual
export const Item = ({ producto }) => {
  return (
    // 3. Estilos básicos para la card
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '250px', textAlign: 'center' }}>
      
      {/* 4. Mostramos los datos del producto */}
      <img src={producto.image} alt={producto.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      
      {/* 5. Este es el Link para cumplir con la navegación (Req 3 y 4) */}
      {/* Redirige a la ruta dinámica /producto/ID_DEL_PRODUCTO */}
      <Link to={`/producto/${producto.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};