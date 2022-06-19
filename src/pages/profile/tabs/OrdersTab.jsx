import { useAddress } from "context/address-context";
import React from "react";
import { Link } from "react-router-dom";

export const OrdersTab = () => {
  const { orders } = useAddress();
const reversedOrders = orders.reverse()
  return (
    <>
      {!orders.length ? (
        <div className="centered vertical-direction no-order-wrapper">
          <div className="font3 mb-lg">No Orders yet ?</div>
          <Link className="decor-none btn-to-product" to="/products">
            Go To Products{" "}
          </Link>
        </div>
      ) : (
        <>
          {reversedOrders.map((order) => {
            const {firstname,lastname,street,city,state,country,pincode,phone} = order.deliveryAddress
            return (
              <div className="centered vertical-direction order-wrapper">
                <div className="text-success">Order Confirmed</div>
                <div className="mb-lg text-secondary payment-text">
                  Payment Id: <span>{order?.paymentId}</span>
                </div>
                <div className="text-success">Delivery Address</div>
                <div className='margin-lg text-secondary' >
              <div>  {firstname} {lastname}</div>
              <div>{street}</div>
              <div>{city}, {state} {country}, {pincode}</div>
              <div>Mobile: {phone}</div>
              </div>
              </div>

            );
          })}
        </>
      )}
    </>
  );
};
