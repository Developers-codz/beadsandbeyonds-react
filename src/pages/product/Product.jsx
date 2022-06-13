import { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useProduct } from "context/product-context";
import { getSortedData, getFilteredData, getRateFilteredData ,getPriceFilteredData,getSearchedData} from "functions";
import { Productlisting } from "component";
import { useDocumentTitle } from "hooks";
import { Toast } from "component";

const Product = () => {
  useDocumentTitle("Products");
  const [filter, setFilter] = useState(false);
  const [productList, setProductList] = useState([]);
  const { state, dispatch } = useProduct();
  useEffect(async () => {
    try {
      const res = await axios.get("/api/products");
      setProductList(res.data.products);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const priceFiltered = getPriceFilteredData(productList,state.price)
  const sortedData = getSortedData(priceFiltered, state.sortBy);
  const rateFilteredData = getRateFilteredData(sortedData, state.ratings);
  const filteredData = getFilteredData(rateFilteredData, state.categoryBy);
  const searchedData = getSearchedData(filteredData,state.searchText)


  return (
    <div className="main">
      <div className="filters-wrapper">
        <div className="filter-header-wrapper mb-lg">
          <h3 className="reset" onClick={() => setFilter(!filter)}>
            FILTERS
          </h3>
          <button
            className="clear-btn"
            onClick={() =>
              dispatch({ type: "CLEAR", payload: "CLEAR_ALL_FILTER" })
            }
          >
            Clear All
          </button>
        </div>
        <hr />
        <div
          className={
            filter
              ? "filter-body-wrapper show-filter-body"
              : "filter-body-wrapper"
          }
        >
            <div className="price-section">
            <h4 className="mb-lg">PRICE</h4>
            <input
              type="range"
              min="10"
              max="1000"
              value={state.price}
              className="slider"
              id="myRange"
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
            />
            <div className="sort-by-ratings">
              <span>99</span>
              <span>1000</span>
            </div>
          </div>
          <hr />

          <div className="category-section">
            <h4 className="mb-lg">CATEGORY</h4>
            <div className="sort-by-category">
              <input
                type="checkbox"
                name="category"
                id="painting"
                value="painting"
                checked={state.categoryBy.find(cat => cat === "painting")}
                onClick={(e) =>
                  dispatch({ type: "FILTER", payload: e.target.value })
                }
              />
              <label htmlFor="painting">Paintings</label>
            </div>
            <div className="sort-by-category">
              <input
                type="checkbox"
                name="category"
                id="decoration"
                value="decorations"
                checked={state.categoryBy.find(cat => cat === "decorations")}
                onClick={(e) =>
                  dispatch({ type: "FILTER", payload:e.target.value })
                }
              />
              <label htmlFor="decoration">Decorations</label>
            </div>
            <div className="sort-by-category">
              <input
                type="checkbox"
                name="category"
                id="toys"
                value="toys"
                checked={state.categoryBy.find(cat => cat === "toys")}
                onClick={(e) =>
                  dispatch({ type: "FILTER", payload: e.target.value })
                }
              />
              <label htmlFor="toys">Toys</label>
            </div>
            <div className="sort-by-category">
              <input
                type="checkbox"
                name="category"
                id="home-decor"
                value="home"
                checked={state.categoryBy.find(cat => cat === "home")}
                onClick={(e) =>
                  dispatch({ type: "FILTER", payload: e.target.value })
                }
              />
              <label htmlFor="home-decor">Home Decors</label>
            </div>
          </div>
          <hr />
          <div className="rating-section">
            <h4 className="mb-lg">RATING</h4>
            <div className="sort-by-ratings">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={state.ratings}
              className="slider"
              id="myRange"
              onChange={(e) =>
                dispatch({ type: "RATINGS", payload: e.target.value })
              }
            />
          </div>
          <hr />
          <div className="sort-section">
            <h4 className="mb-lg">SORT BY</h4>
            <div className="sort-by-price">
              <input
                type="radio"
                name="sort-by-price"
                id="low-to-high"
                onClick={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />
              <label htmlFor="low-to-high">Price: Low to High</label>
            </div>
            <div className="sort-by-price">
              <input
                type="radio"
                name="sort-by-price"
                id="high-to-low"
                onClick={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />
              <label htmlFor="high-to-low">Price: High to low</label>
            </div>
          </div>
       
        </div>
      </div>
      <div className="shopping-wrapper centered">
        <Toast />
        {searchedData.map((item) => {
          return (
            <>
              <Productlisting product={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export { Product };
