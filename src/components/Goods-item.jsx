function GoodsItem(props) {
  const { id, name, description, price, fullBackground, addToBasket } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={fullBackground} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => {
            addToBasket(id);
          }}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
