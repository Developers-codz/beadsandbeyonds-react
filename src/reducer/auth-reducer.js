export const userInitialState = {
  id: null,
  firstName: "",
  lastName: "",
  isAuthTokenPresent: false,
  authToken: "",
  msg: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "loggedIn": {
      const { firstName, lastName, _id } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
      };
    }
    case "signup": {
      const { firstName, lastName, _id } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
      };
    }
    case "error":
      return { ...state, msg: action.payload };

    case "logOut":
      return userInitialState;

    default:
      return state;
  }
};
