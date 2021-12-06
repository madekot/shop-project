import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';

function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  function addToOrder(id) {
    const productFromGoods = goods.find((product) => product.id === id);
    productFromGoods.quantity = 1;
    setOrder([...order, productFromGoods]);
  }

  function addQuantity(id) {
    const productFromOrders = order.find((product) => product.id === id);
    const idx = order.findIndex((product) => product.id === id);
    productFromOrders.quantity += 1;

    setOrder([
      ...order.slice(0, idx),
      productFromOrders,
      ...order.slice(idx + 1),
    ]);
  }

  function addToBasket(id) {
    const hasOrderProduct =
      order.findIndex((product) => product.id === id) > -1;
    hasOrderProduct ? addQuantity(id) : addToOrder(id);
  }

  function hadleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then(({ featured }) => {
        featured && setGoods(featured);
        setLoading(false);
      });
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
        <BasketList order={order} hadleBasketShow={hadleBasketShow} />
      )}
    </main>
  );
}

export default Shop;
