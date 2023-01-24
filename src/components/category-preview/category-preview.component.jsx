import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

import React from "react";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer className="category-preview-container">
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
