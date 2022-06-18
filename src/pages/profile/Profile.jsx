import "./profile.css";
import { NavLink,Outlet } from "react-router-dom";
import { useDocumentTitle } from "hooks";
import { Toast } from "component";


const Profile = () => {
  useDocumentTitle("Profile");

  return (
    <>
      <Toast />
      <div className="profile-card">

      <div className="tabs">
        <NavLink className="tabLinks decor-none" to="/profile/me">Profile</NavLink>
        <NavLink className="tabLinks decor-none" to="/profile/address">Address</NavLink>
        <NavLink className="tabLinks decor-none" to="/profile/orders">Order</NavLink>

      </div>
      </div>
    <Outlet />
     
    </>
  );
};

export { Profile };
