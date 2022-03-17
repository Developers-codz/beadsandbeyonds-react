import "./category.css";
import { categoryList } from "data/category-list";
const Category = () => {
  return (
    <>
      <div className="category-wrapper">
        <h2 className="category-header font1">Featured Category</h2>
        {categoryList.map((item) => {
          return (
            <img
              src={item.image}
              alt={item.name}
              key={item.id}
              className="border-square category-item"
            />
          );
        })}
      </div>
    </>
  );
};

export { Category };
