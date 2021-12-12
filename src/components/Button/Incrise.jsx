import { useContext } from 'react';
import { ShopContext } from '../../context';

function Incrise({ id, children }) {
  const { decreaseQuantityToOrder } = useContext(ShopContext);

  return (
    <i
      className="material-icons basket-quantity"
      onClick={() => decreaseQuantityToOrder(id)}
    >
      {children}
    </i>
  );
}

export default Incrise;
