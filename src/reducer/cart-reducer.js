export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART" :
      return {
        ...state,cartData:action.payload,
        cartCount:action.payload.reduce((acc,curr) =>acc+=curr.qty,  0)
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: action.payload,
        cartCount: state.cartCount + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: action.payload,
        cartCount: state.cartCount - action.qty,
      };
    case "INCREASE_CART_ITEM":
      return {
        ...state,
        cartData: action.payload,
        cartCount: state.cartCount + 1,
      };
    case "DECREASE_CART_ITEM":
      return {
        ...state,
        cartData: action.payload,
        cartCount: state.cartCount - 1,
      };
    case "TRUNCATE": {
      return { ...state, cartData: [], cartCount: 0 };
    }
    default:
      return { ...state };
  }
};
