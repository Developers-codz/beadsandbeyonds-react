import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { productReducer } from "reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    categoryBy: null,
    ratings: 2,
    clear: null,
  });
  useEffect(async () => {
    const res = await axios.get("/api/products");
    setProductList(res.data.products);
  }, []);
  return (
    <ProductContext.Provider value={{ productList, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
