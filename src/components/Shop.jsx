import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';

function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  function getItemFromGoods(id) {
    return goods.find((good) => good.id === id);
  }

  function getItemFromOrder(id) {
    return order.find((good) => good.id === id);
  }

  function addOrder(id) {
    const good = getItemFromGoods(id);
    setOrder([...order, good]);
  }

  function updateOrder(id) {
    if (!getItemFromOrder(id)) {
      addOrder(id);
    }
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
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} updateOrder={updateOrder} />
      )}
    </main>
  );
}

export default Shop;
