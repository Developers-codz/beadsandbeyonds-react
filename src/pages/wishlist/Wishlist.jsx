import "./wishlist.css";
import { useWishlist } from "context/wishlist-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";

const Wishlist = () => {
  useDocumentTitle("WishList");
  const {
    wishlistState: { wishlistData },
    wishCount,
    removeFromWishlistHandler,
  } = useWishlist();
  const {
    cartState: { cartData },
    addToCartHandler,
  } = useCart();
  const isInCartList = (id) => cartData.find(({ _id }) => _id == id);
  const clickHandler = (product) => {
    addToCartHandler(product);
  };
  // console.log(wishlistData);
  if (wishlistData.length > 0) {
    return (
      <>
        <div className="wishlist-head-wrapper">
          <h3 className="wishlist-head">MY WishList : </h3>
          <span className="text-secondary font3"> {wishCount} Items</span>
        </div>
        <div className="wishlist-wrapper">
          {wishlistData.map((item) => {
            return (
              <div className="wishlist-card" key={item._id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-img"
                />
                <div className="del-btn">
                  <i
                    onClick={() => removeFromWishlistHandler(item._id)}
                    className="fa fa-trash"
                  ></i>
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
      <div style={{ textAlign: "center" }}>
        <h1>Oops, Your WishList is Empty ☹️</h1>
        <img src={shoppingImage} />
        <div className="btn-to-product-wrapper">
          <Link className="decor-none btn-to-product" to="/products">
            Go To Products Now{" "}
          </Link>
        </div>
      </div>
    );
  }
};

export { Wishlist };
