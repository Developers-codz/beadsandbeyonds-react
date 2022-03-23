import "./profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useDocumentTitle } from "hooks";
const Profile = () => {
  useDocumentTitle("Profile");
  const {
    authDispatch,
    authState: { firstName },
  } = useAuth();

  return (
    <>
      <div className="profile-card">
        <h1 style={{ margin: "3rem" }}>
          <div>Welcome back {firstName}</div>
          <Link to="/products">Go To shopping</Link>
        </h1>
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
