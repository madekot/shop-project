function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeOrderFromBasket,
    incriseQuantityToOrder,
    decreaseQuantityToOrder,
  } = props;

  return (
    <li className="collection-item">
      {name}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => decreaseQuantityToOrder(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incriseQuantityToOrder(id)}
      >
        add
      </i>{' '}
      = {price * quantity} руб.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeOrderFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
