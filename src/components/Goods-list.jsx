import GoodsItem from './Goods-item';

function GoodsList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        const { id } = item;
        return <GoodsItem key={id} {...item} addToBasket={addToBasket} />;
      })}
    </div>
  );
}

export default GoodsList;
