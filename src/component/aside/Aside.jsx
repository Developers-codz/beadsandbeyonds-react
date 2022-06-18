import { useAside } from "context/aside-context";
import { image1 } from "assets/images";
import { NavLink } from "react-router-dom";
const Aside = () => {
  const { activeAside, setActiveAside } = useAside();
  return (
    <>
      <aside
        className="side-section"
        style={activeAside ? { left: "0%" } : { left: "-50%" }}
      >
        <div className="navbar-links">
          <div className="sidebar-head">
            <i
              className="fa fa-times"
              id="sidebar-close"
              onClick={() => setActiveAside(false)}
            ></i>
          </div>
          <div className="avatar centered mb-lg">
            <img
              className="img-md border-round img-border"
              src={image1}
              alt="Avatar"
            />
          </div>
          <hr />
          <ul className="navbar-items">
            <li>
              <NavLink className="quick-link decor-none" to="/">
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="quick-link decor-none">
                Shop now
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/me" className="quick-link decor-none">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/orders" className="quick-link decor-none">
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/address" className="quick-link decor-none">
                Address
              </NavLink>
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
