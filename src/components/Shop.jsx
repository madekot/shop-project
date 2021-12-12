import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

import Services from '../Services';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const services = new Services();
  const { loading, setGoods, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    services.getData().then((data) => setGoods(data));
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
