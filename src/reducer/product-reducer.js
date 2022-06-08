const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return { ...state, sortBy: action.payload };
    }
    case "FILTER":
      return { ...state, categoryBy: action.payload };
    case "RATINGS":
      return { ...state, ratings: action.payload };
      case "PRICE" :
      return {...state,price:action.payload};
    }
};
export { productReducer };
