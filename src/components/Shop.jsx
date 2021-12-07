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
    const hasProductOrder =
      order.findIndex(({ id: orderId }) => orderId === goodsId) > -1;

    if (!hasProductOrder) {
      addOrderToBasket(goodsId);
    }
    incriseQuantityToOrder(goodsId);
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
        <BasketList
          order={order}
          hadleBasketShow={hadleBasketShow}
          removeOrderFromBasket={removeOrderFromBasket}
          incriseQuantityToOrder={incriseQuantityToOrder}
          decreaseQuantityToOrder={decreaseQuantityToOrder}
        />
      )}
    </main>
  );
}

export default Shop;
