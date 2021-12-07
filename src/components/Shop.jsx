import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  function addToOrder(id) {
    const productFromGoods = goods.find((product) => product.id === id);
    setOrder([...order, productFromGoods]);
  }

  function addQuantityToOrder(id) {
    setOrder((prevOrder) =>
      prevOrder.map((product) => {
        const quantity = (product.quantity || 0) + 1;
        return product.id === id ? { ...product, quantity } : product;
      }),
    );
  }

  function addToBasket(id) {
    const hasOrderProduct =
      order.findIndex((product) => product.id === id) > -1;

    if (!hasOrderProduct) {
      addToOrder(id);
    }
    addQuantityToOrder(id);
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
