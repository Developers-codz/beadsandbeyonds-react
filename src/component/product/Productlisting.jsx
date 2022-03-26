import { useWishlist } from "context/wishlist-context";
import { useState } from "react";
import { useAuth } from "context/auth-context";
import { useCart } from "context/cart-context";

import { Link, useNavigate } from "react-router-dom";
const Productlisting = ({ product }) => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const [liked, setLiked] = useState(false);

  const {
    setCartCount,
    addToCartHandler,
    cartState: { cartData },
  } = useCart();
  const {
    wishlistState: { wishlistData },
    addToWishlistHandler,
  } = useWishlist();
  const isInWishList = (id) => wishlistData.find(({ _id }) => _id == id);
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  var classNames = require("classnames");

  const clickHandler = (e, product) => {
    addToCartHandler(product);
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
            <Link to="/cart" className="move-to-cart-btn-wrapper">
              <button className="reset btn-to-cart">Go to cart</button>
            </Link>
          ) : (
            <div className="move-to-cart-btn-wrapper">
              <button
                className="reset btn-to-cart"
                onClick={(e) => clickHandler(e, product)}
              >
                Add to cart
              </button>
            </div>
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
            addToWishlistHandler(product);
          }}
        ></i>
      </div>
    </div>
  );
};

export { Productlisting };
