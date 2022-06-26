import "./wishlist.css";
import { useState } from "react";
import { useWishlist } from "context/wishlist-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";
import { Toast } from "component";

const Wishlist = () => {
  useDocumentTitle("WishList");
  const [isDisabled,setDisabled] = useState(false)
  const [isCartBtnDisabled,setCartBtnDisabled] = useState(false)
  const {
    wishlistState: { wishlistData, wishCount },
    removeFromWishlistHandler,
  } = useWishlist();
  const {
    cartState: { cartData },
    addToCartHandler,
  } = useCart();
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  const clickHandler = (product) => {
    addToCartHandler(product,setCartBtnDisabled);
  };
  if (wishlistData.length > 0) {
    return (
      <>
        <div className="wishlist-head-wrapper">
          <h3 className="wishlist-head">MY WishList : </h3>
          <span className="text-secondary font3"> {wishCount} Items</span>
        </div>
        <div className="wishlist-wrapper">
          <Toast />
          {wishlistData.map((item) => {
            return (
              <div className="wishlist-card" key={item._id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-img"
                />
                <div className="del-btn">
                  <button
                    disabled={isDisabled}
                    className="rm-wishlist-icon"
                    onClick={() => removeFromWishlistHandler(item._id,setDisabled)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
                <h2 className="card-heading ">{item.name}</h2>
                <p className="text-secondary">{item.description}</p>
                <small className="text-success">
                  <strike className="text-secondary">₹499</strike> 60% off{" "}
                </small>
                <p className="item-price font3">{item.price} only</p>
                <div className="move-to-cart-btn-wrapper">
                  {isInCartList(item._id) ? (
                    <Link to="/cart" className="move-to-cart-btn-wrapper">
                      <button className="reset btn-to-cart">Go to cart</button>
                    </Link>
                  ) : (
                    <button
                      disabled={isCartBtnDisabled}
                      className="reset btn-to-cart"
                      onClick={() => clickHandler(item)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Toast />
        <div className="wishlist-head-wrapper center-text">
          <h1>Oops, Your WishList is Empty ☹️</h1>
          <img src={shoppingImage} />
          <div className="btn-to-product-wrapper">
            <Link className="decor-none btn-to-product" to="/products">
              Go To Products Now{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export { Wishlist };
