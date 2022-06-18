import "./checkout.css";
import React, { useState, useEffect } from "react";
import { useDocumentTitle } from "hooks";
import { useCart } from "context/cart-context";
import { useAddress } from "context/address-context";
import { useToast } from "context/toast-context";
import { Toast } from "component";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  useDocumentTitle("Checkout");
  const navigate = useNavigate();
  const {
    cartState: { cartData },
    cartCount,
    couponDiscount: { discount },
    truncateCart,
  } = useCart();
  const {
    setAddressModalOpen,
    addresses,
    getAddress,
    setOrders
  } = useAddress();
  const { setToastVal } = useToast();
  useEffect(() => {
    getAddress();
  }, []);

  const totalAmt =
    cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0) -
    99 -
    discount;
  const [selectedAddress, setSelectedAddress] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        currency: "INR",
        amount: totalAmt * 100,
        name: "Beads and Beyonds",
        description: "Thanks for shopping with us!",
        prefill: {
          name: "Jane Doe",
          email: "janedoe@gmail.com",
          contact: "9934567890",
        },
        handler: function (response) {
          const deliveryAddress = addresses.find(
            ({ _id }) => _id === selectedAddress
          );
          setOrders((prev) => [
            ...prev,
            {
              paymentId: response.razorpay_payment_id,
              deliveryAddress: deliveryAddress,
            },
          ]);
          truncateCart();
          navigate("/profile/orders");
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };
  const razorpayHandler = async () => {
    if (selectedAddress === "") {
      setToastVal((prevVal) => ({
        ...prevVal,
        bg: "red",
        isOpen: true,
        msg: "Please select a delivery Address",
      }));
      setTimeout(
        () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
        1500
      );
      return;
    }
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.log("you are offline");
      return;
    }
  };
  return (
    <>
      <Toast />
      <div className="checkoutmain">
        <div className="wishlist-head-wrapper">
          <h3 className="wishlist-head">Checkout : </h3>
          <span className="text-secondary font3"> {cartCount} Items</span>
        </div>
        <div className="checkout-left-pane">
          <div className="left-head">
            <h3 className="address-head">Select Delivery Address</h3>
            <button
              className="decor-none add-address-btn  shadow-box"
              onClick={() => {
                setAddressModalOpen(true);
              }}
            >
              Add New Address
            </button>
          </div>
          <div className="left-body">
            {addresses.map((add, i) => {
              return (
                <div className="each-address" key={add._id}>
                  <input
                    type="radio"
                    name="address"
                    id={add._id}
                    value={add._id}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                  />
                  <label htmlFor={add._id}>
                    <h3>
                      {add.firstname} {add.lastname}
                    </h3>
                    <h4>{add.street}</h4>
                    <h4>
                      {add.city}, {add.state} {add.country}, {add.pincode}
                    </h4>
                    <h4>Phone - {add.phone}</h4>
                  </label>
                </div>
              );
            })}
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
                  {cartData.reduce(
                    (acc, curr) => acc + curr.price * curr.qty,
                    0
                  )}
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
              <div className="text-success font6 saving-text">
                * You will save {99 + discount} on this order
              </div>
              <button
                className="mb-lg place-order-btn"
                onClick={razorpayHandler}
              >
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
