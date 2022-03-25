import "./wishlist.css";
import { useWishlist } from "context/wishlist-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";

const Wishlist = () => {
  useDocumentTitle("WishList");
  const { wishList, wishCount, setWishList, setWishCount } = useWishlist();
  if (wishList.length > 0) {
    return (
      <>
        <div className="wishlist-head-wrapper">
          <h3 className="wishlist-head">MY WishList : </h3>
          <span className="text-secondary font3"> {wishCount} Items</span>
        </div>
        <div className="wishlist-wrapper">
          {wishList.map(({ _id, name, image, price, description }) => {
            return (
              <div className="wishlist-card" key={_id}>
                <img
                  src={image}
                  alt="painting-item1"
                  className="wishlist-img"
                />
                <div className="del-btn">
                  <i
                    onClick={() => {
                      setWishList((wishList) =>
                        wishList.filter((arr) => arr._id !== _id)
                      );
                      setWishCount((count) => count - 1);
                    }}
                    className="fa fa-trash"
                  ></i>
                </div>
                <h2 className="card-heading ">{name}</h2>
                <p className="text-secondary">{description}</p>
                <small className="text-success">
                  <strike className="text-secondary">₹499</strike> 60% off{" "}
                </small>
                <p className="item-price font3">{price} only</p>
                <div className="move-to-cart-btn-wrapper">
                  <button className="btn-to-cart">MOVE TO CART</button>
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
