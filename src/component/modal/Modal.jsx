import { useCart } from "context/cart-context";
export const Modal = () => {
  const {
    cartState: { cartData },
    isModalOpen,
    setModalOpen,
    couponDiscount,
    setCouponDiscount,
  } = useCart();
  const total = cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  return (
    <div
      class="coupon-modal"
      id="coupon-popup"
      style={isModalOpen ? { display: "block" } : { display: "none" }}
    >
      <div class="modal-close-btn" onClick={() => setModalOpen(false)}>
        <i class="fa fa-times fa-lg" id="modal-closer-btn"></i>
      </div>
      <div class="modal-body">
        <h2 class="mb-lg">Apply Coupon</h2>
        <div class="coupons-list text-secondary">
          <label for="new-user">
            <input
              type="radio"
              name="coupon"
              id="new-user"
              disabled={total < 1500}
              checked={couponDiscount.discount === 500}
              onClick={() =>
                total > 1500
                  ? setCouponDiscount((disc) => ({
                      ...disc,
                      selected: true,
                      discount: 500,
                    }))
                  : setCouponDiscount((disc) => ({
                      ...disc,
                      selected: false,
                      discount: 0,
                    }))
              }
            />
            NEW USER
          </label>
          <br />
          <small>Save ₹500 on minimum purchase of 1500</small>
        </div>
        <div class="coupons-list text-secondary">
          <label for="festive">
            <input
              type="radio"
              name="coupon"
              id="festive"
              disabled={total < 1000}
              checked={couponDiscount.discount === 300}
              onClick={() =>
                total > 1000
                  ? setCouponDiscount((disc) => ({
                      ...disc,
                      selected: true,
                      discount: 300,
                    }))
                  : setCouponDiscount((disc) => ({
                      ...disc,
                      selected: false,
                      discount: 0,
                    }))
              }
            />
            FESTIVE OFF
          </label>
          <br />
          <small>Save ₹300 on minimum purchase of 1000</small>
        </div>
        <div class="apply-coupon-btn-wrapper">
          <button class="apply-coupon-btn" onClick={() => setModalOpen(false)}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};
