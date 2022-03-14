const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return { ...state, sortBy: action.payload };
    }
    case "FILTER":
      return { ...state, categoryBy: action.payload };
  }
};
export { productReducer };
