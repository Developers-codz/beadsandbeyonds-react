import "./checkout.css"
import React from 'react';
import { useDocumentTitle } from "hooks";
import { useCart } from "context/cart-context";
import { useAddress } from "context/address-context";


export const Checkout = () => {
    useDocumentTitle("Checkout");
    const {
        cartState: { cartData },
        cartCount,
        couponDiscount: { discount },
      } = useCart();
      const {setAddModalOpen} = useAddress();
  return (
    <div className='checkoutmain'>
         <div className="wishlist-head-wrapper">
        <h3 className="wishlist-head">Checkout : </h3>
        <span className="text-secondary font3"> {cartCount} Items</span>
      </div>
     <div className="checkout-left-pane">
         <div className="left-head">

         <h3 className="address-head">Select Delivery Address</h3>
         <button className="decor-none add-address-btn  shadow-box" onClick={()=>{
           console.log("I clicked")
           setAddModalOpen(true)}}>Add New Address</button>
         </div>
    </div>
    <div className="checkout-right-pane">
    <div className="bill-card">
         
          <h4 className="mb-lg text-vibrant">
            Order Summary: ({cartCount} items)
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
              
                Proceed To Pay
          
            </button>
          </div>
        </div>
    </div>
    </div>
  )
}
