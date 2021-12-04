import Preloader from './Preloader';
import GoodsList from './Goods-list';

function Shop(props) {
  const { loading, goods } = props;
  return (
    <main className="container content">
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}

export default Shop;
