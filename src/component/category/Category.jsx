import "./category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "context/product-context";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { dispatch } = useProduct();
  useEffect(async () => {
    try {
      const res = await axios.get("./api/categories");
      setCategoryList(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <div className="category-wrapper">
        <h2 className="category-header font1">Featured Category</h2>
        {categoryList.map((item) => {
          return (
            <div
              onClick={() =>
               { dispatch({ type: "CLEAR", payload: "CLEAR_ALL_FILTER" })
                 dispatch({
                  type: "FILTER",
                  payload: `${item.categoryName}`,
                });
                
              }
              }
              style={{ display: "inline-block" }}
            >
              <Link to={`/products`} className="decor-none">
                <div className="category-card">
                <img
                  src={item.image}
                  alt={item.name}
                  key={item._id}
                  className="border-square category-item"
                />
                <div className="category-name font3">{item.categoryName.toUpperCase()}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Category };
