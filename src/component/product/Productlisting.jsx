import { useWishlist } from "context/wishlist-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  const {
    addToCartHandler,
    cartState: { cartData },
    isFetching
  } = useCart();
  const {
    wishlistState: { wishlistData },
    addToWishlistHandler,
    removeFromWishlistHandler,
    isDisabled
  } = useWishlist();
  const isInWishList = (id) => wishlistData.find(({ _id }) => _id == id);
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  var classNames = require("classnames");

  const clickHandler = (e, product) => {
    const token = localStorage.getItem("token")
    if(token) addToCartHandler(product);
    else navigate("/login")
  };


  return (
    <div
      className="card card-simple margin-sm reset decor-none"
      key={product._id}
    >
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="card-img" />
      </Link>
      <div className="card-textarea">
        <div className="left-pane evenly-padding-sm">
        <Link to={`/products/${product._id}`} className="decor-none">
          <h2 className="card-heading">{product.name}</h2>
          <p className="text-secondary">{product.description}</p>
          </Link>
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
            <div className="move-to-cart-btn-wrapper">
              <button onClick={()=>navigate("/cart")} className="reset btn-to-cart cartBtn">Go to cart</button>
            </div>
          ) : (
            <div className="move-to-cart-btn-wrapper">
              <button
                className="reset btn-to-cart cartBtn" disabled={isFetching}
                onClick={(e) => clickHandler(e, product)}
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
        <button className="wishlist-icon"  disabled={isDisabled}
          onClick={() => {
            const token = localStorage.getItem("token")
            if (isInWishList(product._id)) {
              if(token) setLiked(true);
              removeFromWishlistHandler(product._id);
            } else {
              if(token) setLiked(false);
             addToWishlistHandler(product);
            if(!token) navigate("/login")
            }
          }}
        >
        <i
       
          className={classNames(
            "fa-heart fa-lg  card-icon border-round text-primary heart-icon",
            { far: liked },
            { fa: isInWishList(product._id) },
            { fa: liked === false }
            )}
        ></i>
        </button>
      </div>
    </div>
  );
};

export { Productlisting };
