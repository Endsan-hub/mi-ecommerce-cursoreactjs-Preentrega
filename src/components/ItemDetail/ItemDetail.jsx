import { useCart } from '../../context/CartContext';
export const ItemDetail = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    // (Req 1: evento de clic)
    // Agregamos 1 unidad. (En el futuro, puedes agregar un contador de cantidad)
    addItem(product, 1); 
    alert(`Agregaste 1 ${product.title} al carrito!`);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '150px' }} />
      <p>{product.description}</p>
      <h3>Precio: ${product.price}</h3>
      <button onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};