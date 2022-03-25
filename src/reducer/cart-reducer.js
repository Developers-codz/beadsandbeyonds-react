export const cartReducer = (state, action) => {
  switch (action.type) {
    case "set_to_cart":
      return { ...state, cartData: action.payload };
    case "set_qtty":
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return { ...state };
  }
};
