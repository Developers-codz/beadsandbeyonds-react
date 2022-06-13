import { useContext, createContext, useReducer, useEffect } from "react";
import { useToast } from "./toast-context";
import axios from "axios";
import { userInitialState, authReducer } from "reducer/auth-reducer";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, userInitialState);
  const { toastVal, setToastVal } = useToast();
  //  While login
  const loginHandler = async (e, formData) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        e.target.value === "user"
          ? JSON.stringify(formData)
          : {
              email: "kajalkumari@gmail.com",
              password: "kajalkumari",
            }
      );
      //saving the token in localstorage
      localStorage.setItem("token", response.data.encodedToken);

      const { foundUser, encodedToken } = response.data;
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Login SuccessFully",
        isOpen: true,
        bg: "green",
      }));
      setTimeout(
        () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
        1000
      );
      authDispatch({
        type: "loggedIn",
        payload: foundUser,
        token: encodedToken,
      });
    } catch (err) {
      console.log(err.response);
      const { status, statusText } = err.response;
      if (status === 404 && statusText === "Not Found") {
        authDispatch({
          type: "error",
          payload: "user not found, please signup :)",
        });
      } else if (status === 401 && statusText === "Unauthorized") {
        authDispatch({
          type: "error",
          payload: "Either entered email or password is wrong",
        });
      } else if (status === 422 && statusText === "Unprocessable Entity") {
        authDispatch({
          type: "error",
          payload: "Email Already Exist",
        });
      } else {
        authDispatch({ type: "error", payload: "something wrong happened" });
      }
    }
  };
  //  While signUp

  const signupHandler = async (e, formData, setFormData, formObj) => {
    try {
      const response = await axios.post(
        "/api/auth/signup",
        JSON.stringify(formData)
      );
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      console.log(response.data);

      const { createdUser, encodedToken } = response.data;
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Signup Successfully",
        isOpen: true,
        bg: "green",
      }));
      setTimeout(
        () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
        1000
      );
      authDispatch({
        type: "signup",
        payload: createdUser,
        token: encodedToken,
      });
    } catch (error) {
      console.log(error);
    }
    setFormData(formObj);
  };
  // While log out

  const logoutHandler = () => {
    setToastVal((prevVal) => ({
      ...prevVal,
      msg: "logged out successfully",
      isOpen: true,
      bg: "red",
    }));
    setTimeout(
      () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
      1000
    );
    authDispatch({ type: "logOut" });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
