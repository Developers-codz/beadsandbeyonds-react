import "./cart.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { useAuth } from "context/auth-context";
const Cart = () => {
  useDocumentTitle("Cart");
  const {
    authState: { cart },
  } = useAuth();
  return cart.length === 0 ? (
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
      <div class="wishlist-head-wrapper">
        <h3 class="wishlist-head">MY CART : </h3>
        <span class="text-secondary font3"> 2 Items</span>
      </div>
      <div class="cart-left-pane">
        <div class="cart-items">
          <img src="./assets/item2.jpg" alt="product" />
          <div class="cart-product-detail">
            <h3 class="text-vibrant">Wooden Basket</h3>
            <p class="text-secondary ">Environment Friendly Baskets</p>
            <p class="item-price font3 mb-lg">₹499 only</p>
            <div class="quantity mb-lg">
              <button>-</button>
              <input type="text" disabled value="2" />
              <button>+</button>
            </div>
            <button class="wishlist-btn">Move to WishList</button>
          </div>
        </div>
        <div class="cart-items">
          <img src="./assets/metalCraft2.jfif" alt="product" />
          <div class="cart-product-detail">
            <h3 class="text-vibrant">Show Piece</h3>
            <p class="text-secondary ">
              Traditional home decor
              <small>(in metals)</small>
            </p>
            <p class="item-price font3 mb-lg">₹99 only</p>
            <div class="quantity mb-lg">
              <button>-</button>
              <input type="text" disabled value="1" />
              <button>+</button>
            </div>
            <button class="wishlist-btn">Move to WishList</button>
          </div>
        </div>
      </div>
      <div class="cart-right-pane">
        <div class="bill-card">
          <h4 class="mb-lg text-vibrant">COUPONS</h4>
          <button class="mb-lg coupon" id="coupon-btn">
            <i class="fa fa-tag"></i>Apply Coupon
          </button>
          <h4 class="mb-lg text-vibrant">PRICE DETAILS: (3 items)</h4>
          <div class="bill-card-body">
            <div class="price-breakdown">
              <h5 class="mb-lg">Total MRP: </h5> <span> ₹1599</span>
            </div>
            <div class="price-breakdown">
              <h5 class="mb-lg">Discount on MRP: </h5> <span> ₹99</span>
            </div>
            <div class="price-breakdown">
              <h5 class="mb-lg">Delivery charge </h5>
              <span class="text-success">
                {" "}
                <strike> ₹99</strike>
                free{" "}
              </span>
            </div>
            <div class="price-breakdown bill-amount">
              <h5 class="">Total Amount</h5>
              <span>₹1500</span>
            </div>
            <button class="mb-lg place-order-btn">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
