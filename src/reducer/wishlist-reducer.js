export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return { ...state, wishlistData: action.payload };
    default:
      return { ...state };
  }
};
