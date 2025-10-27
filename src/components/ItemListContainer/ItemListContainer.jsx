// 1. Importamos los hooks necesarios
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// 2. Importamos los componentes de presentación (que crearemos a continuación)
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
  
  // 3. Hooks de estado
  const [productos, setProductos] = useState([]); // Para guardar los productos
  const [loading, setLoading] = useState(true);   // Para el estado de carga (Req 2)
  const [error, setError] = useState(null);       // Para el estado de error (Req 2)
  
  // 4. Hook para leer parámetros de la URL
  const { idCategoria } = useParams();

  // 5. Hook de efecto para llamar a la API
  useEffect(() => {
    // Reseteamos estados al iniciar la carga
    setLoading(true);
    setError(null);

    // 6. Definimos la URL de la API
    // Usamos Fake Store API: https://fakestoreapi.com/
    const url = idCategoria 
      ? `https://fakestoreapi.com/products/category/${idCategoria}`
      : 'https://fakestoreapi.com/products';

    // 7. Hacemos el 'fetch'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Guardamos los datos en el estado
        setProductos(data);
      })
      .catch((err) => {
        // Guardamos el error
        setError(err.message);
      })
      .finally(() => {
        // Terminamos la carga (haya ido bien o mal)
        setLoading(false);
      });

  }, [idCategoria]); // 8. El array de dependencias
  
  // 9. Renderizado condicional
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error al cargar productos: {error}</div>;
  }

  // 10. Si todo salió bien, pasamos los productos a ItemList
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};