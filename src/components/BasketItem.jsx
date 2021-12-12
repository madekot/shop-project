import { Incrise, Decrise, Close } from './Button';

function BasketItem(props) {
  const { id, name, price, quantity } = props;
  const priceItem = price * quantity;

  return (
    <li className="collection-item">
      {name}&nbsp;
      <Incrise id={id}>remove</Incrise>
      &nbsp;{quantity}&nbsp;
      <Decrise id={id}>add</Decrise>
      {`= ${priceItem} руб.`}
      <span className="secondary-content">
        <Close id={id}>close</Close>
      </span>
    </li>
  );
}

export { BasketItem };
