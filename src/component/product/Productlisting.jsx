import { useWishlist } from "context/wishlist-context";
import { useState } from "react";
import { useAuth } from "context/auth-context";
import { useCart } from "context/cart-context";
import { Link, useNavigate } from "react-router-dom";
const Productlisting = ({ product }) => {
  const navigate = useNavigate;
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const [liked, setLiked] = useState(false);

  const {
    setCartCount,
    AddToCartHandler,
    cartState: { cartData },
  } = useCart();
  const { setWishCount, setWishList, wishList } = useWishlist();
  const isInWishList = (id) => wishList.find(({ _id }) => _id == id);
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  var classNames = require("classnames");

  const clickHandler = (e, product) => {
    AddToCartHandler(product);
  };

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
          {isInCartList(product._id) ? (
            <Link to="/cart">
              <button className="reset add-to-cart">Go to cart</button>
            </Link>
          ) : (
            <button
              className="reset add-to-cart"
              onClick={(e) => clickHandler(e, product)}
            >
              Add to cart
            </button>
          )}
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
