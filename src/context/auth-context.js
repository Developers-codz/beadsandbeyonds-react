import { useContext, createContext, useReducer, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { userInitialState, authReducer } from "reducer/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, userInitialState);

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
      console.log(response.data.foundUser);

      const { foundUser, encodedToken } = response.data;
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
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
