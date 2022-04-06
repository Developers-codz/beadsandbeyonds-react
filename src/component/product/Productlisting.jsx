import { useWishlist } from "context/wishlist-context";
import { useState } from "react";
import { useAuth } from "context/auth-context";
import { useCart } from "context/cart-context";
import { useToast } from "context/toast-context";
import { Link } from "react-router-dom";
const Productlisting = ({ product }) => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const { setToastVal } = useToast();
  const [liked, setLiked] = useState(true);

  const {
    setCartCount,
    addToCartHandler,
    cartState: { cartData },
  } = useCart();
  const {
    wishlistState: { wishlistData },
    addToWishlistHandler,
    removeFromWishlistHandler,
  } = useWishlist();
  const isInWishList = (id) => wishlistData.find(({ _id }) => _id == id);
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  var classNames = require("classnames");

  const clickHandler = (e, product) => {
    addToCartHandler(product);
  };


  return (
    <div
      className="card card-simple reset margin-md decor-none"
      key={product._id}
    >
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="card-img" />
      </Link>
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
              <button className="reset btn-to-cart cartBtn">Go to cart</button>
            </Link>
          ) : (
            <div className="move-to-cart-btn-wrapper">
              <button
                className="reset btn-to-cart cartBtn"
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
            { far: liked },
            { fa: isInWishList(product._id) },
            { fa: liked === false }
          )}
          onClick={() => {
            if (isInWishList(product._id)) {
              setLiked(true);
              removeFromWishlistHandler(product._id);
            } else {
              setLiked(false);
              addToWishlistHandler(product);
            }
          }}
        ></i>
      </div>
    </div>
  );
};

export { Productlisting };
