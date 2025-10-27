// 1. Importamos el componente de la tarjeta
import { Item } from '../Item/Item';
// 2. Este componente recibe 'productos' por props
export const ItemList = ({ productos }) => {
  
  return (
    // 3. Damos algo de estilo para que se vea como una grilla
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      
      {/* 4. Mapeamos los productos. Por cada 'prod', creamos un <Item> */}
      {productos.map((prod) => (
        
        // 5. Pasamos el producto completo como prop 'producto'
        // La 'key' es obligatoria en React para las listas
        <Item key={prod.id} producto={prod} />
      
      ))}
    </div>
  );
};