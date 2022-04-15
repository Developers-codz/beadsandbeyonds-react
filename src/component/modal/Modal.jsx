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
      className="coupon-modal"
      id="coupon-popup"
      style={isModalOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-close-btn" onClick={() => setModalOpen(false)}>
        <i className="fa fa-times fa-lg" id="modal-closer-btn"></i>
      </div>
      <div className="modal-body">
        <h2 className="mb-lg">Apply Coupon</h2>
        <div className="coupons-list text-secondary">
          <label htmlFor="new-user">
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
        <div className="coupons-list text-secondary">
          <label htmlFor="festive">
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
        <div className="apply-coupon-btn-wrapper">
          <button className="apply-coupon-btn" onClick={() => setModalOpen(false)}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};
