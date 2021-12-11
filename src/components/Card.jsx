import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, setBasketShow, isBasketShow } = useContext(ShopContext);

  function hadleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  const quantity = order.length;
  return (
    <div className="cart blue darken-4 white-text" onClick={hadleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
