import GoodsItem from './Goods-item';

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        const { id, ...itemProps } = item;
        return <GoodsItem key={id} {...itemProps} />;
      })}
    </div>
  );
}

export default GoodsList;
