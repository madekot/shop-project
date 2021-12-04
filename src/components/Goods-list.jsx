import GoodsItem from './Goods-item';

function GoodsList(props) {
  const { goods = [], updateOrder } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        const { id } = item;
        return <GoodsItem key={id} {...item} updateOrder={updateOrder} />;
      })}
    </div>
  );
}

export default GoodsList;
