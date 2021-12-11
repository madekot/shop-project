import { useEffect, useContext } from 'react';

import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const { loading, setGoods, isBasketShow, alertName } =
    useContext(ShopContext);

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
        setGoods(dataTransfom);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
