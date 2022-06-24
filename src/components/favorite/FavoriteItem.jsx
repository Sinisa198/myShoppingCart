const FavoriteItem = ({ item }) => {
  return (
    <div className="row-cart__favorite">
      <div key={item.id} className="cart__item">
        <div className="cart__item-body-image">
          <img src={item.image} alt="" className="cart__item-img" />
        </div>
        <div className="cart__item-details">
          <span className="cart__item-name">{item.name}</span>
        </div>
        <div className="cart__item-button"></div>
        <div className="cart__item-price"></div>
      </div>
    </div>
  );
};
export default FavoriteItem;
