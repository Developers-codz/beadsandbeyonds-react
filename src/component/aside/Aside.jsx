const Aside = () => {
  return (
    <>
      <aside className="side-section" id="side-section">
        <div className="navbar-links">
          <div className="sidebar-head">
            <i className="fa fa-times" id="sidebar-close"></i>
          </div>
          <div className="avatar centered mb-lg">
            <img
              className="img-md border-round img-border"
              src="./assets/toy1.jpg"
              alt="Avatar"
            />
          </div>
          <hr />
          <ul className="navbar-items">
            <li>
              <a className="active-item decor-none" href="home.html">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="shop.html" className="quick-link decor-none">
                Shop now
              </a>
            </li>
            <li>
              <a href="login.html" className="quick-link decor-none">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="quick-link decor-none">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="quick-link decor-none">
                Address
              </a>
            </li>
            <li>
              <a href="#" className="quick-link decor-none">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export { Aside };
