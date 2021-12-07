import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    hadleBasketShow,
    removeOrderFromBasket,
    incriseQuantityToOrder,
    decreaseQuantityToOrder,
  } = props;

  const totalPrice = order.reduce(
    (sum, orderItem) => sum + orderItem.price * orderItem.quantity,
    0,
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeOrderFromBasket={removeOrderFromBasket}
            incriseQuantityToOrder={incriseQuantityToOrder}
            decreaseQuantityToOrder={decreaseQuantityToOrder}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={hadleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
