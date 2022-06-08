import { useWishlist } from "context/wishlist-context";
import { useCart } from "context/cart-context";
import { useState } from "react";
import { NavLink, Link,useLocation } from "react-router-dom";
import { useAside } from "context/aside-context";
import "./navbar.css";
const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const { setActiveAside } = useAside();
  const { wishCount } = useWishlist();
  const { cartCount } = useCart();
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <header className={path !== "/" ? "bottom-shadow":""} >
        <div
          className="hamburger-wrapper"
          id="hamburger-btn"
          onClick={() => setActiveAside(true)}
        >
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="logo">
          <h1 className="header-logo">Beads & Beyonds....</h1>
          <small className="slogan">Decorate your world with us</small>
        </div>
        <div className="mr-auto page-link-wrapper font3">
          <ul className="style-list-none">
            <li className="inline-block">
              <NavLink exact={true} className="page-link decor-none " to="/">
                Home
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink className="page-link decor-none" to="/products">
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="badge-container">
          <i
            className="fa fa-search fa-lg"
            onClick={() => setSearchBar(!searchBar)}
          ></i>
          <Link
            to="/profile"
            className="avatar avatar-badge text-primary reset"
          >
            <i className="fa fa-user fa-lg" id="user-icon"></i>
          </Link>
          <Link
            to="/wishlist"
            className="avatar avatar-badge text-primary reset"
          >
          <i className="fas fa-lg fa-heart cart"> </i>
          { wishCount >0 &&<div className="status-circle icon-top-badge-sm">{wishCount}</div>}
          </Link>
          <Link to="/cart" className="avatar avatar-badge text-primary reset">
            <i className="fas fa-lg fa-shopping-cart cart"> </i>
            {cartCount>0 && <div className="status-circle icon-top-badge-sm">{cartCount}</div>}
          </Link>
        </div>
      </header>
      {searchBar && (
        <div
          className="search_input_wrapper search-active"
          id="container_input_wrapper"
        >
          <input
            type="text"
            className="search_input font2"
            placeholder="SEARCH...."
          />
          <i
            className="fa fa-times fa-2x search-close"
            onClick={() => setSearchBar(false)}
          ></i>
        </div>
      )}
    </>
  );
};
export { Navbar };
