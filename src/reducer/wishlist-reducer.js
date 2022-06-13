export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlistData: action.payload ,wishCount : state.wishCount+1};
      case "REMOVE_FROM_WISHLIST":
        return { ...state, wishlistData: action.payload ,wishCount : state.wishCount-1};
    case "TRUNCATE":
      return {...state,wishlistData:[],wishCount:0}
    default:
      return { ...state };
  }
};
