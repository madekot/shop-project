import { useContext } from 'react';
import { ShopContext } from '../context';

import GoodsItem from './Goods-item';

function GoodsList() {
  const { goods } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        const { id } = item;
        return <GoodsItem key={id} {...item} />;
      })}
    </div>
  );
}

export default GoodsList;
