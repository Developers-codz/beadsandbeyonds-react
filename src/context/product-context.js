import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  useEffect(async () => {
    await axios
      .get("/api/products")
      .then((res) => setProductList(res.data.products));
  }, []);
  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
