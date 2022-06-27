import React from 'react'
import { useProduct } from "context/product-context";

export const CategoryList = ({category}) => {
    const { state, dispatch } = useProduct();
  return (
    <div className="sort-by-category">
    <input
      type="checkbox"
      name="category"
      id={category}
      value={category}
      checked={ state.categoryBy.includes(category)}
      onClick={(e) =>
        dispatch({ type: "FILTER", payload: e.target.value })
      }
    />
    <label htmlFor={category}>{category.charAt(0).toUpperCase()+ category.slice(1)}</label>
  </div>
  )
}
