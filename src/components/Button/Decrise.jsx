import { useContext } from 'react';
import { ShopContext } from '../../context';

function Decrise({ id, children }) {
  const { incriseQuantityToOrder } = useContext(ShopContext);

  return (
    <i
      className="material-icons basket-quantity"
      onClick={() => incriseQuantityToOrder(id)}
    >
      {children}
    </i>
  );
}

export default Decrise;
