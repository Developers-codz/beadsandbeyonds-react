import "./profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useDocumentTitle } from "hooks";
import { shoppingImage } from "assets/svgs";
const Profile = () => {
  useDocumentTitle("Profile");
  const {
    authDispatch,
    authState: { firstName },
  } = useAuth();

  return (
    <>
      <div className="profile-card shadow-box">
        <h2 style={{ margin: "1rem" }}>
          <div>Welcome back {firstName}</div>
        </h2>
        <img src={shoppingImage} />
        <Link to="/products" className="decor-none text-primary font2">
          Go To shopping
        </Link>

        <button
          className="btn-to-cart margin-md"
          onClick={() => authDispatch({ type: "logOut" })}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export { Profile };
