import "./cart.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";
const Cart = () => {
  useDocumentTitle("Cart");
  const {
    cartState: { cartData },
    RemoveFromCartHandler,
    cartCount,
  } = useCart();
  return cartData.length === 0 ? (
    <div style={{ textAlign: "center" }}>
      <h1>Oops, Your Cart is Empty ☹️</h1>
      <img src={shoppingImage} />
      <div className="btn-to-product-wrapper">
        <Link className="decor-none btn-to-product" to="/products">
          Go To Products Now{" "}
        </Link>
      </div>
    </div>
  ) : (
    <div className="cartmain">
      <div className="wishlist-head-wrapper">
        <h3 className="wishlist-head">MY CART : </h3>
        <span className="text-secondary font3"> {cartCount} Items</span>
      </div>
      <div className="cart-left-pane">
        {cartData.map(
          ({ _id, image, name, price, qty, rating, description }) => {
            return (
              <div className="cart-items" key={_id}>
                <img src={image} alt={name} />

                <div className="cart-product-detail">
                  <div
                    className="del-btn-cart"
                    onClick={(e) => RemoveFromCartHandler(_id)}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                  <h3 className="text-vibrant">{name}</h3>
                  <p className="text-secondary ">{description}</p>
                  <p className="item-price font3 mb-lg">₹{price} only</p>
                  <div className="quantity mb-lg">
                    <button>-</button>
                    <input type="text" disabled value="2" />
                    <button>+</button>
                  </div>
                  <button className="wishlist-btn">Move to WishList</button>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="cart-right-pane">
        <div className="bill-card">
          <h4 className="mb-lg text-vibrant">COUPONS</h4>
          <button className="mb-lg coupon" id="coupon-btn">
            <i className="fa fa-tag"></i>Apply Coupon
          </button>
          <h4 className="mb-lg text-vibrant">PRICE DETAILS: (3 items)</h4>
          <div className="bill-card-body">
            <div className="price-breakdown">
              <h5 className="mb-lg">Total MRP: </h5> <span> ₹1599</span>
            </div>
            <div className="price-breakdown">
              <h5 className="mb-lg">Discount on MRP: </h5> <span> ₹99</span>
            </div>
            <div className="price-breakdown">
              <h5 className="mb-lg">Delivery charge </h5>
              <span className="text-success">
                {" "}
                <strike> ₹99</strike>
                free{" "}
              </span>
            </div>
            <div className="price-breakdown bill-amount">
              <h5 className="">Total Amount</h5>
              <span>₹1500</span>
            </div>
            <button className="mb-lg place-order-btn">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
