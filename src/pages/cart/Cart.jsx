import "./cart.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import { Toast } from "component";

const Cart = () => {
  useDocumentTitle("Cart");
  const {
    cartState: { cartData },
    removeFromCartHandler,
    cartCount,
    productQtyIncreaseHandler,
    productQtyDecreaseHandler,
    setModalOpen,
    couponDiscount: { discount },
  } = useCart();
  const { addToWishlistHandler } = useWishlist();
  
  return cartData.length === 0 ? (
    <>
      <Toast />
      <div style={{ textAlign: "center" }}>
        <h1>Oops, Your Cart is Empty ☹️</h1>
        <img src={shoppingImage} />
        <div className="btn-to-product-wrapper">
          <Link className="decor-none btn-to-product" to="/products">
            Go To Products Now{" "}
          </Link>
        </div>
      </div>
    </>
  ) : (
    <div className="cartmain">
      <Toast />
      <div className="wishlist-head-wrapper">
        <h3 className="wishlist-head">MY CART : </h3>
        <span className="text-secondary font3"> {cartCount} Items</span>
      </div>
      <div className="cart-left-pane">
        {cartData.map((item) => {
          return (
            <div className="cart-items" key={item._id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-product-detail">
                <div
                  className="del-btn-cart"
                  onClick={() => removeFromCartHandler(item._id, item.qty)}
                >
                  <i className="fa fa-trash"></i>
                </div>
                <h3 className="text-vibrant">{item.name}</h3>
                <p className="text-secondary ">{item.description}</p>
                <p className="item-price font3 mb-lg">₹{item.price} only</p>
                <div className="quantity mb-lg">
                  <button
                    onClick={() => productQtyDecreaseHandler(item._id)}
                    disabled={item.qty === 1}
                  >
                    -
                  </button>
                  <input type="text" disabled value={item.qty} />
                  <button onClick={() => productQtyIncreaseHandler(item._id)}>
                    +
                  </button>
                </div>
                <button
                  className="wishlist-btn"
                  onClick={() => {
                    addToWishlistHandler(item);
                    removeFromCartHandler(item._id, item.qty);
                  }}
                >
                  {" "}
                  Move to WishList
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-right-pane">
        <div className="bill-card">
          <h4 class="mb-lg text-vibrant">COUPONS</h4>
          <button
            class="mb-lg coupon"
            id="coupon-btn"
            onClick={() => setModalOpen(true)}
          >
            <i class="fa fa-tag"></i>Apply Coupon
          </button>
          <h4 className="mb-lg text-vibrant">
            PRICE DETAILS: ({cartCount} items)
          </h4>
          <div className="bill-card-body">
            <div className="price-breakdown">
              <h5 className="mb-lg">Total MRP: </h5>{" "}
              <span>
                {cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
              </span>
            </div>
            {discount > 0 && (
              <div className="price-breakdown">
                <h5 className="mb-lg">Coupon Discount: </h5>{" "}
                <span>{discount}</span>
              </div>
            )}
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
              <span>
                {cartData.reduce(
                  (acc, curr) => acc + curr.price * curr.qty,
                  0
                ) -
                  99 -
                  discount}
              </span>
            </div>
            <button className="mb-lg place-order-btn">
              <Link to="/checkout" className="decor-none text-secondary ">
                Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
