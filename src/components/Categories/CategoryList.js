import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Link
          key={category.id || category.name}
          to={`/wiki/${category.routeLink}`}
        >
          <CategoryCard id={category.routeLink} categoryData={category} />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
