import { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useProduct } from "context/product-context";
import { getSortedData, getFilteredData, getRateFilteredData } from "functions";
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

  const sortedData = getSortedData(productList, state.sortBy);
  const rateFilteredData = getRateFilteredData(sortedData, state.ratings);
  const filteredData = getFilteredData(rateFilteredData, state.categoryBy);

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
              dispatch({ type: "FILTER", payload: "CLEAR_ALL_FILTER" })
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
          <hr />
          <div className="category-section">
            <h4 className="mb-lg">CATEGORY</h4>
            <div className="sort-by-category">
              <input
                type="radio"
                name="category"
                id="painting"
                onClick={() =>
                  dispatch({ type: "FILTER", payload: "FILTER_BY_PAINTING" })
                }
              />
              <label htmlFor="painting">Paintings</label>
            </div>
            <div className="sort-by-category">
              <input
                type="radio"
                name="category"
                id="decoration"
                onClick={() =>
                  dispatch({ type: "FILTER", payload: "FILTER_BY_DECORATIONS" })
                }
              />
              <label htmlFor="decoration">Decorations</label>
            </div>
            <div className="sort-by-category">
              <input
                type="radio"
                name="category"
                id="toys"
                onClick={() =>
                  dispatch({ type: "FILTER", payload: "FILTER_BY_TOYS" })
                }
              />
              <label htmlFor="toys">Toys</label>
            </div>
            <div className="sort-by-category">
              <input
                type="radio"
                name="category"
                id="home-decor"
                onClick={() =>
                  dispatch({ type: "FILTER", payload: "FILTER_BY_HOME" })
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
        </div>
      </div>
      <div className="shopping-wrapper centered">
        <Toast />
        {filteredData.map((item) => {
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
