import React from "react";
import { useWishlist } from "context/wishlist-context";
import { useCart } from "context/cart-context";
import { useAuth } from "context/auth-context";

export const ProfileTab = () => {
  const {
    logoutHandler,
    authState: { firstName, lastName, email },
  } = useAuth();
  const { truncateWish } = useWishlist();
  const { truncateCart } = useCart();
  return (
    <div className="profile-card profile-Details-card">
    <table className="profile-table">
      <tr>
        <div>

        <th>Account Details</th>
        </div>
      </tr>
      <tr>
        <td>
          Name:
        </td>
        <td>{firstName}{" "}{lastName}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{email}</td>
      </tr>
      <tr>
        <div>

        <th>Account Settings</th>
        </div>
      </tr>
    </table>
      <button
        className="btn-to-cart margin-md"
        onClick={() => {
          logoutHandler();
          truncateWish();
          truncateCart();
        }}
        >
        Log out
      </button>
    </div>
  );
};
