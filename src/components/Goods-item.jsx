import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const {
    goods,
    order,
    addOrderToBasket,
    incriseQuantityToOrder,
    setAlertName,
  } = useContext(ShopContext);

  const { id, name, description, price, fullBackground } = props;

  function addToBasket(goodsId) {
    const hasIdsame = (el) => el.id === goodsId;
    const name = goods.find(hasIdsame).name;
    const hasProductOrder = order.findIndex(hasIdsame) > -1;

    if (!hasProductOrder) {
      addOrderToBasket(goodsId);
    }
    incriseQuantityToOrder(goodsId);
    setAlertName(name);
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={fullBackground} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => {
            addToBasket(id);
          }}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
