import "./category.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "context/product-context";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { dispatch } = useProduct();
  useEffect(async () => {
    const res = await axios.get("./api/categories");
    setCategoryList(res.data.categories);
  }, []);
  return (
    <>
      <div className="category-wrapper">
        <h2 className="category-header font1">Featured Category</h2>
        {categoryList.map((item) => {
          console.log(item.categoryName.toUpperCase());
          return (
            <div
              onClick={() =>
                dispatch({
                  type: "FILTER",
                  payload: `FILTER_BY_${item.categoryName.toUpperCase()}`,
                })
              }
              style={{ display: "inline-block" }}
            >
              <Link to={`/products#${item.categoryName}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  key={item._id}
                  className="border-square category-item"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Category };
