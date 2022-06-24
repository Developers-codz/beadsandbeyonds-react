export const initProductState = {
  sortBy: null,
  categoryBy: [],
  ratings: 2,
  clear: null,
  price:1000,
  searchText:""
}
const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return { ...state, sortBy: action.payload };
    }
    case "FILTER": {
      console.log(action.payload)
      if (state.categoryBy.find((item) => item === action.payload))
      return { ...state,categoryBy: [...state.categoryBy.filter((i) => i != action.payload) ]};
      else
      return { ...state, categoryBy: [...state.categoryBy, action.payload] };
    }
    case "RATINGS":
      return { ...state, ratings: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
      case "SEARCH":
        return {...state,searchText:action.payload};
      case "CLEAR" :{
        return {...state,sortBy: null,
          categoryBy: [],
          ratings: 2,
          clear: null,
          price:1000,
          searchText:""}
      }
  }
};
export { productReducer };
