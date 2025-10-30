// src/pages/Products.jsx
import React from "react";
import ProductSection from "../Components/ProductSection";
import { productData } from "../data/productData";

function ProductsMap() {
  console.log("Product Data is : ",productData);
  return (
    <div>
      {productData.map((item) => (
        <ProductSection key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductsMap;
