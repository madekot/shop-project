function BasketItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      {name} <i className="material-icons basket-quantity">remove</i> x
      {quantity} <i className="material-icons basket-quantity">add</i> ={' '}
      {price * quantity} руб.
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
