export const userInitialState = {
  id: null,
  firstName: "",
  lastName: "",
  isAuthTokenPresent: false,
  authToken: "",
  msg: "",
  email:""
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "loggedIn": {
      const { firstName, lastName, _id,email } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
        email:email
      };
    }
    case "signup": {
      const { firstName, lastName, _id,email } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
        email:email
      };
    }
    case "error":
      return { ...state, msg: action.payload };

    case "logOut": {
      localStorage.setItem("token", "");
      return userInitialState;
    }

    default:
      return state;
  }
};
