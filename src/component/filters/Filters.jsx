import React,{useEffect, useState} from "react";
import { useProduct } from "context/product-context";
import { CategoryList } from "./CategoryList";

export const Filters = () => {
const [filter, setFilter] = useState(false);
const { state, dispatch } = useProduct();
const categoriesArr = ["painting","decorations","toys","home"]


  return (
    <>
      <div className="filters-wrapper">
        <div className="filter-header-wrapper mb-lg">
          <h3 className="reset" onClick={() => setFilter(!filter)}>
            FILTERS
          </h3>
          <button
            className="clear-btn"
            onClick={() => {
              dispatch({ type: "CLEAR", payload: "CLEAR_ALL_FILTER" });
            }}
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
            <div>Rs 99 to Rs {state.price}</div>
            <input
              type="range"
              min="99"
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
           {categoriesArr.map((category,i )=>  (
               <CategoryList category={category} key={i}/>
           ))}
        
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
                checked={state.sortBy === "LOW_TO_HIGH"}
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
                checked={state.sortBy === "HIGH_TO_LOW"}
                onClick={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />
              <label htmlFor="high-to-low">Price: High to low</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
