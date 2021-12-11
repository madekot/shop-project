import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './Goods-list';
import Cart from './Card';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const {
    goods,
    order,
    loading,
    setGoods,
    addOrderToBasket,
    removeOrderFromBasket,
    incriseQuantityToOrder,
    decreaseQuantityToOrder,
    setBasketShow,
    isBasketShow,
    alertName,
    setAlertName,
  } = useContext(ShopContext);

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
        setGoods(dataTransfom);
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
