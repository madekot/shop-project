function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;

  // return (
  //   <div className="movie card">
  //     <div className="card-image waves-effect waves-block waves-light">
  //       <img className="activator" src={full_background} alt="" />
  //     </div>
  //     <div className="card-content">
  //       <span className="card-title activator grey-text text-darken-4">
  //         {name}
  //       </span>
  //       <p style={style.footer}>
  //         <span>{description}</span>
  //         <span>{price}</span>
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
