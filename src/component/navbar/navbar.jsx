import { useState } from "react";
import { useAside } from "../../context/aside-context";
import "./navbar.css";
const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const { setActiveAside } = useAside();
  return (
    <>
      <header>
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
              <a href="index.html" className="page-link decor-none active-item">
                Home
              </a>
            </li>
            <li className="inline-block">
              <a href="shop.html" className="page-link decor-none">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="badge-container">
          <i
            className="fa fa-search fa-lg"
            onClick={() => setSearchBar(!searchBar)}
          ></i>
          <a
            href="login.html"
            className="avatar avatar-badge text-primary reset"
          >
            <i className="fa fa-user fa-lg" id="user-icon"></i>
          </a>
          <a
            href="wishlist.html"
            className="avatar avatar-badge text-primary reset"
          >
            <i className="fas fa-lg fa-heart cart"> </i>
            <div className="status-circle icon-top-badge-sm">4</div>
          </a>
          <a
            href="cart.html"
            className="avatar avatar-badge text-primary reset"
          >
            <i className="fas fa-lg fa-shopping-cart cart"> </i>
            <div className="status-circle icon-top-badge-sm">4</div>
          </a>
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
