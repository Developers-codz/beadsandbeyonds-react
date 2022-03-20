import { useWishlist } from "context/wishlist-context";
import { useState } from "react";
const Productlisting = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { setWishCount, setWishList, wishList } = useWishlist();
  const isInWishList = (id) => wishList.find(({ _id }) => _id == id);
  var classNames = require("classnames");
  return (
    <div className="card card-simple reset margin-md" key={product._id}>
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-textarea">
        <div className="left-pane evenly-padding-sm">
          <h2 className="card-heading">{product.name}</h2>
          <p className="text-secondary">{product.description}</p>
          <div className="stars">
            <span className="font4">
              {product.ratings}{" "}
              <small>
                <i className="fa fa-star"></i>
              </small>
            </span>
          </div>
          <p className="item-price font3">₹{product.price}</p>
        </div>
        <i
          className={classNames(
            "fa-heart fa-lg evenly-padding-sm card-icon border-round text-primary",
            { fa: liked || isInWishList(product._id) },
            { far: liked === false }
          )}
          onClick={() => {
            setLiked(true);
            setWishCount((count) => (liked ? count : count + 1));
            setWishList((wishlist) => [
              ...wishlist.filter((item) => item._id !== product._id),
              product,
            ]);
          }}
        ></i>
      </div>
    </div>
  );
};

export { Productlisting };
