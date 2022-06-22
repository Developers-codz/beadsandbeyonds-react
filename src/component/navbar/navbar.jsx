import { useWishlist } from "context/wishlist-context";
import { useState, useEffect } from "react";
import { useCart } from "context/cart-context";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useAside } from "context/aside-context";
import { useProduct } from "context/product-context";
import "./navbar.css";
import { debounce } from "functions";
import { useAuth } from "context/auth-context";
const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { setActiveAside } = useAside();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { dispatch } = useProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const changeHandler = () => {
    dispatch({ type: "SEARCH", payload: searchText });
  };

  const getOptimisedVersion = debounce(changeHandler, 1000);

  useEffect(() => {
    getOptimisedVersion();
  }, [searchText]);
  return (
    <>
      <header className={path !== "/" ? "bottom-shadow" : ""}>
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
            to="/profile/me"
            className="avatar avatar-badge text-primary reset"
          >
            {localStorage.getItem("token") ? (
              <i className="fa fa-user fa-lg" id="user-icon"></i>
              ) : (
                <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i>
            )}
          </Link>
          <Link
            to="/wishlist"
            className="avatar avatar-badge text-primary reset"
          >
            <i className="fas fa-lg fa-heart cart"> </i>
            {wishlistState.wishCount > 0 && (
              <div className="status-circle icon-top-badge-sm">
                {wishlistState.wishCount}
              </div>
            )}
          </Link>
          <Link to="/cart" className="avatar avatar-badge text-primary reset">
            <i className="fas fa-lg fa-shopping-cart cart"> </i>
            {cartState.cartCount > 0 && (
              <div className="status-circle icon-top-badge-sm">
                {cartState.cartCount}
              </div>
            )}
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
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
              navigate("/products");
            }}
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
