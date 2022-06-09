import "./addressModal.css";
import React, { useState } from "react";
import { useAddress } from "context/address-context";
import { useAuth } from "context/auth-context";

export const AddressModal = () => {
  const { isAddressModalOpen, setAddressModalOpen, setNewAddress } = useAddress();
  const initState = {
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    country: "India",
  };
  const [address, setAddress] = useState(initState);
  const [errormsg, setErrorMsg] = useState("");
  const changeHandler = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const { firstname, lastname, street, city, state, pincode, phone } =
      address;
    if (
      firstname === "" ||
      lastname === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      pincode === "" ||
      phone === ""
    ) {
      setErrorMsg("Please enter all the fields");
      setTimeout(()=>{
        setErrorMsg("")
      },1000)
      return;
    }
    if(phone.length <10 || phone.length >10){
      setErrorMsg("Phone number must be of 10 digits");
      setTimeout(()=>{
        setErrorMsg("")
      },1000)
      return;
    }
 
    setErrorMsg("")
    setNewAddress(address);
    setAddress(initState);
    setAddressModalOpen(false);
  };
  return (
    <div
      style={isAddressModalOpen ? { display: "block" } : { display: "none" }}
      className="address-modal shadow-box"
    >
      <div className="modal-close-btn" onClick={() => setAddressModalOpen(false)}>
        <i className="fa fa-times fa-lg" id="modal-closer-btn"></i>
      </div>
      <div className="modal-body">
        <h3 className="mb-lg">Fill Address to proceed</h3>
        <form className="address-form">
          <div className="name-input-wrapper">
            <input
              type="text"
              name="firstname"
              value={address.firstname}
              onChange={changeHandler}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastname"
              value={address.lastname}
              onChange={changeHandler}
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            placeholder="Enter your house no/Street"
            name="street"
            value={address.street}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="city"
            value={address.city}
            placeholder="Enter your City"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="state"
            value={address.state}
            placeholder="Enter your State"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="pincode"
            value={address.pincode}
            placeholder="Enter your pincode"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="phone"
            value={address.phone}
            placeholder="Enter your Phone number"
            onChange={changeHandler}
          />
          <select
            name="country"
            value={address.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
          </select>
          <div>{errormsg}</div>
          <button className="apply-coupon-btn" onClick={clickHandler}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
