import React from "react";
import Entity from "./Entity";
import "./Entities.css";
import { useParams, Link } from "react-router-dom";

const Entities = ({ getCategoryData, category }) => {
  const params = useParams();
  const currentCategory = category || params.category;

  return (
    <div className="entity-list">
      {getCategoryData(currentCategory).map((entity, i) => (
        <Link key={i} to={`/wiki/${currentCategory}/${entity.name}`}>
          <Entity
            category={currentCategory}
            name={entity.name}
            img={entity.img}
            level={entity.level}
            description={entity.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default Entities;
