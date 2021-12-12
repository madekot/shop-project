import { useContext } from 'react';
import { ShopContext } from '../../context';

function Close({ id, children }) {
  const { removeOrderFromBasket } = useContext(ShopContext);

  return (
    <i
      className="material-icons basket-delete"
      onClick={() => removeOrderFromBasket(id)}
    >
      {children}
    </i>
  );
}

export default Close;
