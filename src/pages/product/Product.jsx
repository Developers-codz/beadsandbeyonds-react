import { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useProduct } from "context/product-context";
import { noProduct } from "assets/svgs";
import {
  getSortedData,
  getFilteredData,
  getRateFilteredData,
  getPriceFilteredData,
  getSearchedData,
} from "functions";
import { Productlisting, Filters } from "component";
import { useDocumentTitle } from "hooks";
import { Toast } from "component";

const Product = () => {
  useDocumentTitle("Products");

  const [productList, setProductList] = useState([]);
  const { state } = useProduct();
  useEffect(async () => {
    try {
      const res = await axios.get("/api/products");
      setProductList(res.data.products);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const priceFiltered = getPriceFilteredData(productList, state.price);
  const sortedData = getSortedData(priceFiltered, state.sortBy);
  const rateFilteredData = getRateFilteredData(sortedData, state.ratings);
  const filteredData = getFilteredData(rateFilteredData, state.categoryBy);
  const searchedData = getSearchedData(filteredData, state.searchText);

  return (
    <div className="main">
      <Filters />
      <div className="shopping-wrapper">
        <Toast />
        {searchedData.length < 1 ? (
          <div className="centered vertical-direction no-product-wrapper">
            <img src={noProduct} className="mb-lg" />
             <h2 >Product you are looking for is not found ☹️</h2>
            
          </div>
        ) : (
          searchedData.map((item) => {
            return (
              <>
                <Productlisting product={item} key={item._id} />
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export { Product };
