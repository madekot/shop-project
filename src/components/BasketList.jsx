import { BasketItem } from './BasketItem';

function BasketList(props) {
  const { order = [], hadleBasketShow } = props;

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: руб.</li>
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
