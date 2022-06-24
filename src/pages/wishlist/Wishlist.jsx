import "./wishlist.css";
import { useWishlist } from "context/wishlist-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";
import { Toast } from "component";

const Wishlist = () => {
  useDocumentTitle("WishList");
  const {
    wishlistState: { wishlistData,wishCount },
    removeFromWishlistHandler,
    isDisabled
  } = useWishlist();
  const {
    cartState: { cartData },
    addToCartHandler,
    isFetching
  } = useCart();
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  const clickHandler = (product) => {
    addToCartHandler(product);
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
                  <button disabled={isDisabled} className="rm-wishlist-icon">

                  <i
                    onClick={() => removeFromWishlistHandler(item._id)}
                    className="fa fa-trash"
                  ></i>
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
                    <button disabled={isFetching}
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
