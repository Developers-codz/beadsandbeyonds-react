import { useReducer, useState } from "react";
import "./product.css";
import { productList } from "data/product-list";
import { productReducer } from "reducer";
import { getSortedData, getFilteredData } from "functions";
const Product = () => {
  const [filter, setFilter] = useState(false);
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    categoryBy: null,
    clear: null,
  });
  const sortedData = getSortedData(productList, state.sortBy);
  const filteredData = getFilteredData(sortedData, state.categoryBy);

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
                  dispatch({ type: "FILTER", payload: "FILTER_BY_DECORATION" })
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
                  dispatch({ type: "FILTER", payload: "FILTER_BY_HOME_DECORS" })
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
              max="100"
              className="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
      <div className="shopping-wrapper centered">
        {filteredData.map(
          ({ id, name, image, category, ratings, description, price }) => {
            return (
              <div className="card card-simple reset margin-md" key={id}>
                <img src={image} alt={name} className="card-img" />
                <div className="card-textarea">
                  <div className="left-pane evenly-padding-sm">
                    <h2 className="card-heading">{name}</h2>
                    <p className="text-secondary">{description}</p>
                    <div className="stars text-primary">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p className="item-price font3">₹{price}</p>
                  </div>
                  <i className="far fa-heart fa-lg evenly-padding-sm card-icon border-round"></i>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export { Product };
