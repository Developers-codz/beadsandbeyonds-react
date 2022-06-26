import "./wishlist.css";
import { useState } from "react";
import { useWishlist } from "context/wishlist-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
import { Toast,WishlistCard } from "component";

const Wishlist = () => {
  useDocumentTitle("WishList");
  const {
    wishlistState: { wishlistData, wishCount },
  } = useWishlist();
  
 
  if (wishlistData.length > 0) {
    return (
      <>
        <div className="wishlist-head-wrapper">
          <h3 className="wishlist-head">MY WishList : </h3>
          <span className="text-secondary font3"> {wishCount} Items</span>
        </div>
        <div className="wishlist-wrapper">
          <Toast />
          {wishlistData.map((item) => {
            return (
             <WishlistCard item={item}/>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Toast />
        <div className="wishlist-head-wrapper center-text">
          <h1>Oops, Your WishList is Empty ☹️</h1>
          <img src={shoppingImage} />
          <div className="btn-to-product-wrapper">
            <Link className="decor-none btn-to-product" to="/products">
              Go To Products Now{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export { Wishlist };
