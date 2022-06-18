import { useAddress } from "context/address-context";
import React from "react";
import { Link } from "react-router-dom";

export const OrdersTab = () => {
  const { orders} = useAddress();

  return (
    <>
      {!orders.length ? (
        <div className="centered vertical-direction no-order-wrapper">
          <div className="font3 mb-lg">No Orders yet ?</div>
          <Link className="decor-none btn-to-product" to="/products">
            Go To Products{" "}
          </Link>
        </div >
      ) : (
     <>
     {orders.map(order => {
       return (
        <div className="centered vertical-direction no-order-wrapper">
        <div className="text-success">Order Confirmed</div>
        <div>Payment Id: <span>{order?.paymentId}</span></div>
        <div></div>
      </div>
       )
     })}
     </>
      )}
    </>
  );
};
