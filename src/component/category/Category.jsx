import "./category.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(async () => {
    await axios
      .get("./api/categories")
      .then((res) => setCategoryList(res.data.categories));
  }, []);
  return (
    <>
      <div className="category-wrapper">
        <h2 className="category-header font1">Featured Category</h2>
        {categoryList.map((item) => {
          return (
            <img
              src={item.image}
              alt={item.name}
              key={item._id}
              className="border-square category-item"
            />
          );
        })}
      </div>
    </>
  );
};

export { Category };
