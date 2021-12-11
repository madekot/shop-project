import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const { setGoodsNew, addOrderToBasketNew, decreaseQuantityToOrderNew } =
    useContext(ShopContext);

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  function addOrderToBasket(id) {
    const productFromGoods = goods.find((product) => product.id === id);
    setOrder([...order, productFromGoods]);
  }

  function removeOrderFromBasket(orderId) {
    setOrder(order.filter((orderItem) => orderItem.id !== orderId));
  }

  function incriseQuantityToOrder(id) {
    setOrder((prevOrder) =>
      prevOrder.map((product) => {
        const quantity = (product.quantity || 0) + 1;
        return product.id === id ? { ...product, quantity } : product;
      }),
    );
  }

  function decreaseQuantityToOrder(id) {
    setOrder((prevOrder) =>
      prevOrder.map((product) => {
        let quantity = product.quantity || 0;
        quantity = quantity > 1 ? quantity - 1 : 1;
        return product.id === id ? { ...product, quantity } : product;
      }),
    );
  }

  function addToBasket(goodsId) {
    const hasIdsame = ({ id: orderId }) => orderId === goodsId;
    const name = goods.find(hasIdsame).name;
    const hasProductOrder = order.findIndex(hasIdsame) > -1;

    if (!hasProductOrder) {
      addOrderToBasket(goodsId);
    }
    incriseQuantityToOrder(goodsId);
    setAlertName(name);

    addOrderToBasketNew(goodsId);
    decreaseQuantityToOrderNew(goodsId);
  }

  function hadleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  function closeAlert() {
    setAlertName('');
  }

  const getDataTransfom = (data) => {
    return data.map((itemData) => {
      const {
        id,
        name,
        description,
        price,
        full_background: fullBackground,
      } = itemData;

      return {
        id,
        name,
        description,
        price,
        fullBackground,
      };
    });
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then(({ featured }) => {
        const dataTransfom = getDataTransfom(featured);
        featured && setGoods(dataTransfom);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} hadleBasketShow={hadleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          hadleBasketShow={hadleBasketShow}
          removeOrderFromBasket={removeOrderFromBasket}
          incriseQuantityToOrder={incriseQuantityToOrder}
          decreaseQuantityToOrder={decreaseQuantityToOrder}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
