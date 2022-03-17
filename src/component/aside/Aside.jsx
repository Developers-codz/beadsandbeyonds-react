import { useAside } from "context/aside-context";
import { image1 } from "assets/images";
import { Link } from "react-router-dom";
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
              <Link className="active-item decor-none" to="/">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="quick-link decor-none">
                Shop now
              </Link>
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
