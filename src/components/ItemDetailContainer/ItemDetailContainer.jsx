import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail'; // Importa el componente de presentación
export const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. useParams para obtener el ID del producto de la URL
  const { idProducto } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    // 2. Fetch a un solo producto
    fetch(`https://fakestoreapi.com/products/${idProducto}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

  }, [idProducto]); // Se ejecuta cada vez que el ID cambie

  // 3. Renderizado condicional
  if (loading) return <div>Cargando detalle del producto...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Producto no encontrado.</div>;

  // 4. Pasa el producto encontrado a ItemDetail
  return <ItemDetail product={product} />;
};